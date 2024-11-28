inputs: {
  config,
  lib,
  pkgs,
  ...
}: let
  inherit (pkgs.stdenv.hostPlatform) system;
  inherit (lib) assertStringPath mkIf mkOption mkEnableOption types escapeShellArg optionalString;
  cfg = config.services.web-config.server;
  dataDir = "/var/lib/web-config-api";
  package = inputs.self.packages.${system}.web-config-api;
in {
  options.services.web-config.server = {
    enable = mkEnableOption "Enable the web-config server";
    package = mkOption {
      type = types.package;
      default = package;
      description = "The package to use for the web-config server";
    };
    settings = {
      port = mkOption {
        type = types.int;
        default = 3000;
        description = "The port to listen on";
      };
      github = {
        tokenFile = mkOption {
          type = types.path;
          example = "/run/keys/github_token";
          apply = assertStringPath "tokenFile";
          description = ''
            The path to a file containing the github api key.
          '';
        };
      };
      headscale = mkOption {
        type = types.submodule {
          options = {
            host = mkOption {
              type = types.str;
              default = "https://vpn.joka00.dev";
              description = "The headscale host";
            };
            tokenFile = mkOption {
              type = types.path;
              example = "/run/keys/headscale_token";
              apply = assertStringPath "tokenFile";
              description = ''
                The path to a file containing the headscale api key.
              '';
            };
          };
        };
      };
      redis = mkOption {
        type = types.submodule {
          options = {
            host = mkOption {
              type = types.str;
              default = "localhost";
              description = "The host";
            };
            port = mkOption {
              type = types.int;
              default = 6379;
              description = "The port";
            };
          };
        };
      };
    };
  };
  config = mkIf cfg.enable {
    users.groups.web-config = {};
    users.users.web-config = {
      description = "web-config-api user";
      home = dataDir;
      group = cfg.group;
      isSystemUser = true;
    };
    systemd.services.web-config-api = {
      # after = databaseServices;
      # bindsTo = databaseServices;
      wantedBy = ["multi-user.target"];
      path = with pkgs; [
        package
        nodejs_22
      ];
      serviceConfig = {
        User = "web-config";
        Group = "web-config";
        DynamicUser = true;
        RuntimeDirectory = "web-config-api";
        RuntimeDirectoryMode = "0700";
        Type = "notify";
        NotifyAccess = "all";
        ExecStart = "${pkgs.nodejs_22}/bin/node ${package}/dist/main.js";
        ExecStartPre = ''
          export PORT=${cfg.settings.port}
          export REDIS_URL="${escapeShellArg config.settings.redis.host}"
          export REDIS_PORT=${escapeShellArg cfg.settings.redis.port}
          ${optionalString (cfg.settings.headscale.url != null) ''
            export HEADSCALE_URL="${escapeShellArg cfg.settings.headscale.url}"
          ''}
          ${optionalString (cfg.settings.db_password_file != null) ''
            export HEADSCALE_API="$(head -n1 ${escapeShellArg cfg.settings.headscale.tokenFile})"
          ''}
          ${optionalString (cfg.settings.github.tokenFile != null) ''
            export GITHUB_API="$(head -n1 ${escapeShellArg cfg.settings.github.tokenFile})"
          ''}
            export NODE_ENV=production
        '';
      };
    };
  };
}

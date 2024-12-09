inputs: {
  config,
  lib,
  pkgs,
  ...
}: let
  inherit (pkgs.stdenv.hostPlatform) system;
  inherit (lib) mkIf mkOption mkEnableOption types escapeShellArg optionalString;
  inherit (builtins) isPath;
  assertStringPath = optionName: value:
    if isPath value
    then
      throw ''
        services.nix-configurator.api.settings.${optionName}:
          ${toString value}
          is a Nix path, but should be a string, since Nix
          paths are copied into the world-readable Nix store.
      ''
    else value;
  cfg = config.services.nix-configurator.api;
  dataDir = "/var/lib/nix-configurator-api";
  package = inputs.self.packages.${system}.nix-configurator-api;
in {
  options.services.nix-configurator.api = {
    enable = mkEnableOption "Enable the nix-configurator api";
    package = mkOption {
      type = types.package;
      default = package;
      description = "The package to use for the nix-configurator api";
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
          apply = assertStringPath "github.tokenFile";
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
              apply = assertStringPath "headscale.tokenFile";
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
    users.groups.nix-configurator-api = {};
    users.users.nix-configurator-api = {
      description = "nix-configurator user";
      group = "nix-configurator-api";
      isSystemUser = true;
    };
    systemd.services.nix-configurator-api = {
      # after = databaseServices;
      # bindsTo = databaseServices;
      wantedBy = ["multi-user.target"];
      path = with pkgs; [
        package
        nodejs_22
        coreutils
        git
      ];
      serviceConfig = {
        User = "nix-configurator-api";
        Group = "nix-configurator-api";
        DynamicUser = true;
        RuntimeDirectory = "nix-configurator-api";
        RuntimeDirectoryMode = "0700";
        Environment = [
          "PORT=${escapeShellArg cfg.settings.port}"
          "REDIS_URL=${escapeShellArg cfg.settings.redis.host}"
          "REDIS_PORT=${escapeShellArg cfg.settings.redis.port}"
          "DATA_DIR=${dataDir}"
          "HEADSCALE_URL=${escapeShellArg cfg.settings.headscale.host}"
        ];
        ExecPreStart = ''
          export HEADSCALE_API=$(head -n1 ${escapeShellArg cfg.settings.headscale.tokenFile})
          export GITHUB_API=$(head -n1 ${escapeShellArg cfg.settings.github.tokenFile});
        '';
        ExecStart = "${pkgs.nodejs_22}/bin/node ${package}/dist/main.js";
      };
    };
  };
}

{
  self,
  lib,
  config,
  dream2nix,
  ...
}: {
  imports = [
    dream2nix.modules.dream2nix.nodejs-package-lock-v3
    dream2nix.modules.dream2nix.nodejs-granular-v3
  ];

  mkDerivation = {
    src = ../.;
    nativeBuildInputs = [config.deps.nodejs_22];

    installPhase = ''
      mkdir -p $out
      cp -r dist/ $out/
      cp package*.json $out/
      cp -r node_modules $out/
      touch $out/schema.gql
    '';

    meta = {
      homepage = "https://github.com/JosefKatic/nix-configurator-api";
      license = lib.licenses.mit;
      platforms = lib.platforms.linux;
    };
  };
  deps = {nixpkgs, ...}: {
    inherit
      (nixpkgs)
      fetchFromGitHub
      stdenv
      nodejs_22
      ;
  };

  nodejs-package-lock-v3 = {
    packageLockFile = "${config.mkDerivation.src}/package-lock.json";
  };
  nodejs-granular-v3 = {
    runBuild = true;
    buildScript = "npm run build";
  };

  name = "nix-configurator-api";
  version = "0.0.1";
}

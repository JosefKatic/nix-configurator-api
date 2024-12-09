{
  perSystem = {
    config,
    pkgs,
    ...
  }: {
    devShells.default = pkgs.mkShell {
      NIX_CONFIG = "extra-experimental-features = nix-command flakes ca-derivations";
      packages = with pkgs; [
        nix
        git
        python3
        nodejs_22
      ];
      shellHook = ''
        ${config.pre-commit.installationScript}
      '';
    };
    formatter = pkgs.alejandra;
  };
}

{
  # This flake is meant to be used solely with nix-config repo.
  # It could be imported into nix-modules repo, but there is no need for that.
  description = "API part of the web-config server";

  inputs = {
    dream2nix.url = "github:nix-community/dream2nix";
    nixpkgs.follows = "dream2nix/nixpkgs";
  };

  outputs = {
    self,
    dream2nix,
    nixpkgs,
    ...
  } @ inputs: let
    # A helper that helps us define the attributes below for
    # all systems we care about.
    eachSystem = nixpkgs.lib.genAttrs [
      "x86_64-linux"
      "aarch64-linux"
    ];
  in {
    devShells = eachSystem (system:
      import ./shell.nix {
        pkgs = nixpkgs.legacyPackages.${system};
        lib = nixpkgs.lib;
      });
    formatter = eachSystem (system: nixpkgs.legacyPackages.${system}.alejandra);
    nixosModules.default = eachSystem (system:
      import ./nix/module.nix inputs {
        pkgs = nixpkgs.legacyPackages.${system};
      });
    packages = eachSystem (system: {
      web-config-api = dream2nix.lib.evalModules {
        packageSets.nixpkgs = nixpkgs.legacyPackages.${system};
        modules = [
          # Import our actual package definiton as a dream2nix module from ./default.nix
          ./nix/package.nix
          {
            # Aid dream2nix to find the project root. This setup should also works for mono
            # repos. If you only have a single project, the defaults should be good enough.
            paths.projectRoot = ./.;
            # can be changed to ".git" or "flake.nix" to get rid of .project-root
            paths.projectRootFile = "flake.nix";
            paths.package = ./.;
          }
        ];
      };
    });
  };
}

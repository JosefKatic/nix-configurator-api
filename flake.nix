{
  # This flake is meant to be used solely with nix-config repo.
  # It could be imported into nix-modules repo, but there is no need for that.
  description = "API part of the nix-configurator api";

  inputs = {
    dream2nix.url = "github:nix-community/dream2nix";
    flake-parts.url = "github:hercules-ci/flake-parts";
    nixpkgs.follows = "dream2nix/nixpkgs";
    pre-commit-hooks = {
      url = "github:cachix/pre-commit-hooks.nix";
      inputs.nixpkgs.follows = "dream2nix/nixpkgs";
    };
  };

  outputs = {
    self,
    dream2nix,
    nixpkgs,
    flake-parts,
    ...
  } @ inputs:
    flake-parts.lib.mkFlake {inherit inputs;} {
      systems = ["x86_64-linux" "aarch64-linux"];
      perSystem = {
        pkgs,
        inputs',
        config,
        lib,
        system,
        ...
      }: let
        nix-configurator-api = dream2nix.lib.evalModules {
          packageSets.nixpkgs = pkgs;
          modules = [
            # Import our actual package definiton as a dream2nix module from ./default.nix
            ./nix/default.nix
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
      in {
        _module.args.pkgs = import nixpkgs {
          inherit system;
        };

        packages = {
          inherit nix-configurator-api;
          default = nix-configurator-api;
        };
      };
      imports = [
        ./pre-commit-hooks.nix
        ./shell.nix
      ];
      flake.nixosModules = {
        default = import ./nix/module.nix inputs;
      };
    };
}
#   let
#     # A helper that helps us define the attributes below for
#     # all systems we care about.
#     eachSystem = nixpkgs.lib.genAttrs [
#       "x86_64-linux"
#       "aarch64-linux"
#     ];
#   in {
#     devShells = eachSystem (system:
#       import ./shell.nix {
#         pkgs = nixpkgs.legacyPackages.${system};
#         lib = nixpkgs.lib;
#       });
#     formatter = eachSystem (system: nixpkgs.legacyPackages.${system}.alejandra);
#     });
#   };
# }


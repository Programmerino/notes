{
  description = "Second Brain";
  inputs.flake-utils = {
    url = "github:numtide/flake-utils";
  };
  inputs.obsidianhtml = {
    url = "github:Programmerino/obsidian-html/personal";
  };
  inputs.nixpkgs = {
    url = "github:NixOS/nixpkgs";
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
    obsidianhtml,
  }:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = import nixpkgs {
          inherit system;
        };

        name = "Notes";

        project = obsidianhtml.mkProject."${system}" {
          inherit name;
          src = ./ObsidianVault;
          toggles.process_all = true;
          entrypoint = "index.md";
        };
      in rec {
        packages.default = project.compile;

        devShells.default = pkgs.mkShell {
          inherit name;
          buildInputs = [
            obsidianhtml.packages."${system}".default
          ];
        };

        apps.run = flake-utils.lib.mkApp {
          drv = project.run;
        };
      }
    );
}

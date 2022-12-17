{
  nixConfig.extra-substituters = [
    "https://programmerino.cachix.org"
  ];

  nixConfig.extra-trusted-public-keys = [
    "programmerino.cachix.org-1:v8UWI2QVhEnoU71CDRNS/K1CcW3yzrQxJc604UiijjA="
  ];

  description = "Second Brain";
  inputs.flake-utils = {
    url = "github:numtide/flake-utils";
  };
  inputs.obsidianhtml = {
    url = "github:Programmerino/obsidian-html";
    inputs.nixpkgs.follows = "nixpkgs";
  };
  inputs.nixpkgs = {
    url = "github:NixOS/nixpkgs/nixpkgs-unstable";
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
          #included_file_suffixes = [
          #  "jpg"
          #  "jpeg"
          #  "gif"
          #  "png"
          #  "bmp"
          #  "pdf"
          #  "mp4"
          #  "webm"
          #  "wav"
          #  "mp3"
          #  "html"
          #];
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

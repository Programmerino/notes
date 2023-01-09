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
    url = "github:obsidian-html/obsidian-html";
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
          # site_name = "{title.capitalize()}";
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
          html_custom_inclusions = [
            ''
              <!-- Google tag (gtag.js) -->
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-0HMN6TDKSW"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-0HMN6TDKSW');
              </script>
            ''
          ];

          # toggles:
          #   features:
          #     side_pane:             # only valid for documentation layout
          #       left_pane:
          #         enabled: True
          #         width: 16rem
          #         contents: dir_tree # <toc, tag_tree, dir_tree>

          toggles = {
            process_all = true;
            features = {
              # side_pane = {
              #   left_pane = {
              #     enabled = true;
              #     width = "16rem";
              #     contents = "dir_tree";
              #   };
              # };
              breadcrumbs.enabled = true;
              embedded_note_titles.enabled = true;
              create_index_from_dir_structure = {
                enabled = true;
                rel_output_path = "index.html";
                styling.show_icon = false;
                exclude_subfolders = [
                  ".git"
                  "__src"
                  "md"
                  "obs.html"
                  "_notion-like-tables"
                  "storage"
                  "zotero"
                ];
                exclude_files = [
                  "favicon.ico"
                  "not_created.html"
                  "index.html"
                ];
              };
              mermaid_diagrams.enabled = false;
              callouts.enabled = false;
              tags_page.enabled = false;
              graph.enabled = false;
              create_index_from_tags.enabled = false;
              styling = {
                layout = "minimal";
              };
            };
          };
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

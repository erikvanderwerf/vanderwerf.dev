"""Helper function to call chdir to the project root directory.

Copyright (c) 2023 Erik VanderWerf
Last Updated 2023-05-09
"""

import os
from pathlib import Path


ROOT_FILES = ["pyproject.toml", ".git", "LICENSE"]


def chdir_project_root() -> None:
    """Call `os.chdir` to move to the project root.

    This check is based on the presence of pyproject.toml in the
    project root directory.
    """
    cwd = Path.cwd()
    project_root = next(
        filter(
            lambda level: any(Path.exists(level / x) for x in ROOT_FILES),
            (cwd, *cwd.absolute().parents),
        )
    )
    if project_root != cwd:
        print(f"pyproject.toml found in parent directory: {str(project_root)!r}.")
        os.chdir(project_root)


if __name__ == '__main__':
    chdir_project_root()
    print(f"Detected project root: {str(Path.cwd())!r}.")

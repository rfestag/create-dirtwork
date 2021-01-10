# Dirtwork

Dirtwork is a project template. It is a different take on project creation, opting to provide sane defaults
that are not hidden behind the scenes. This gives you an easy way to extend the toolchain if you prefer, but
otherwise you can stick with the defaults.

It is built around using `pnpm` as a package manager. This is to simplify the process of setting up monorepos
if you prefer, but also becuase I personally really like `pnpm`.

## Install

You don't necessarily need to install dirtwork. However, if you prefer to use a locally installed version, 
you can install it initally with pnpm:

```
pnpm install -g create-dirtwork
```

## Usage

### Creating a workspace
Workspaces are the root portion of a monorepo. You can either use `pnpx` to run it without installing anything:

```
pnpx create-dirtwork workspace [name]
```

or as an init-template:

```
pnpm init dirtwork workspace [name]
```

### Creating an application
All applications are Next JS applications that utilize Material-UI, and provides some sane defaults.
To create a new application:

```
pnpx create-dirtwork app [name]
```

or as an init-template:

```
pnpm init dirtwork app [name]
```

If you run this within an existing workspace, it will be properly positioned in `apps/[name]`. Otherwise,
it will create a new stand-alone application with all of the development setup that normally gets 
put in the root of the workspace.

### Creating a package
All packages are relatively bare-bones NPM libraries, ready to be used by your applications (or
other packages). 
To create a new package:

```
pnpx create-dirtwork package [name]
```

or as an init-template:

```
pnpm init dirtwork package [name]
```

If you run this within an existing workspace, it will be properly positioned in `packages/[name]`. Otherwise,
it will create a new stand-alone package with all of the development setup that normally gets 
put in the root of the workspace.

## Contributing

PRs accepted.

## License

ISC © Ryan Festag

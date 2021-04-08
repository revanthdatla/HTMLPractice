Angular: The Big Picture
========================

# Introduction

## What is Angular?

A tool to build interactive websites using its Framework.

one of its many alternatives are:
1. jQuery

The Original version of Angular is called AngularJS which includes
version starting with Angular 1.x.


Angular JS

- Angular 1.x

Angular

- Angular 2+

The current version is called Angular which includes versions from
Angular 2+ like Angular 5, 6, 8.

History

- Misko Hevery at Google developed AngularJS.
- The new framework Angular was developed to replace the original
  version to address more boarder problems.

Angular is standards based. More modern with state managements, change
detection and similar features. It is more performant.

## Angular Starter Application

A starter application can be created using the Angular CLI's `ng`
command from the command line, which creates a template project with
default directory structure and configuration files to get started.

The `ng serve` command run a web server and serves the starter app
locally.

TODO: Explore more about Angular CLI and its features.

## Versions of Angular

Angular 2.0.

Angular 3.0 was skipped. There was never a version released.

Angular 4+.

### Release Cadence & Support

Release major version every 6 months, when ever the feature are ready at
that particular release time line. 6 months active support after
release. 12 months LTS support.

On top of that, `ng update` tool is provided by the Angular to update to
the current version of the code.

## Summary

Angular is the current framework which replaces the original AngularJS.

It is more modern and performant.

CLI is a powerful tool that automates a lot of tasks.


# Benefits & Features

It reduces the cost by providing a framework that addresses: Development
Time, bug fixing and stability. Irrespective of the organization and
projects. It was observed to produce 10 times reduction of cost.

## Universal Benefits

It is a standards compliant, which helps to support cross-browser. It
implements modern features such as

- ES6+
- Modules
- Internationalization & Accessibility.

It is very performant in comparison with its previous framework.

It is Open Source and popular. Very well documented.

## Subjective & Situational Benefits

It is a Framework based, which comes with features that are ready to
use. Such as:

- Router, HTTP, Forms, RxJS, etc.
- Less Decisions

Uniformity.

Google Backing.

Written using TypeScript. It needs to be used with TS to use Angular.

## Basic Features

Easily to build Progressive Web Apps - a emerging standard, which allows
web application to be installed as a Mobile application, tap an icon on
a phone to open web app and even offline support.

// TODO: explore more about progressive web apps.

Lazy loading, which allows to load the files that are only needed; which
improves boot-up time.

Provides Fully featured Forms library support that helps to develop
complex Forms quite easily.

Provides RXJS library, which handles asynchronous data.

Fully featured Router. Animations.

## Advanced Features

- supports server side rendering - very important for SEO, improved
  perceived performance.
- Mobile friendly.
- Angular Language Service for better Intellisense, debugging and
  template in Code Editors.
- Provides ngUpgrade Library. It provides transition tool from a
  AngularJS web application slowly to the Angular app.

## Summary

- Angular provides low cost development.
- Extremely performant.
- Full Framework.
- Uses TypeScript.
- Many features.
- Server side rendering and Mobile support.
- Upgrade.

# Architecture

The key parts in an angular Architecture are One Way Data Flow,
Dependency Injection, Components, Directives, Templates and multiple
rendering targets.

Zone.js.

## One Way Data Flow

Data Change flows only in one direction that is from a parents to its
children. To elaborate, when a change is detected on a parent's state,
all its children state, and the parent state change checks happens
during this time.

## Dependency Injection

The dependency injection is one of the foundational architectural
constructs. It is the same concepts that is observed in a strongly typed
languages such as Java.

## Components

It's a staple of the modern frameworks like Angular. A component can be
used like a tag in the HTML by declaring the component using special
selectors.

## Directives

It is a way to add new capabilities to the element of your display.

## Templates

They specify how components display. They can be specified in a separate
file or in-line.

## State Change

It is an important featues to be handled in any architecture. Which
happens in an application when events happen.

They occur when
- user interacts
- HTTP
- Timer

Whenever a stage change is detected, the architecture needs to re-render
with the updated state.

Zone.js creates a wrapper around all asynchronous interactions such as
User Interactions, HTTP, and Timers. Angular subscribe to get
notifications whenever changes completes.

## Rendering targets

Angular built to render to any number of devices by changing the
rendering engine. It comes with two packages to enable rendering into
the browser and the DOM - browser-platform, browser-platform-dynamic.

It supports many rendering targets like

- Browser/DOM
- Server-Side
- Native Mobile Apps
- Native Desktop Apps
- Others

## Summary

- Faster with its one way data flow.
- Its continues to use the Dependency Injection from AngularJS.
- Zone.js to manage state changes.
- Multiple rendering targets.

# Tooling

Angular comes with build-in tool to provide more features to an
application such as

- CLI
- Server-Side Rendering
- Mobile/Native Frameworks
- Testing
- AOT(Ahead of Time) Compiler
- Editors

## The Angular CLI

It is an answer to ease build environment setup process in JS based
projects by handling

- Module handling
- TypeScript/ES6 Transpilation
- Bundling
- Minifying
- Browser shims
- Zone.js

### CLI Capabilities

- It can create new Angular applications
- New Components/Service/Pipe etc
- Serving up the Application
- Linting
- Testing
- Building

## Server-Side Rendering

The server-side rendering happens using the tool called angular
universal.

Main Benefits

- Improves performance by reducing the initial file download size.
- Render Time. Parsing happen on the server.
- SEO

Server-Side Rendering Operation Modes

- Full pre-render.
- Dynamic pre-render.
- Client-Side Switch
  - Download App
  - Hidden Div
  - Boots
  - Replays Events
  - Swap Display

## Mobile and Native Frameworks

Mobile

- Ionic
- NativeScript

Desktop

- Electron


## Testing Tools

Angular testing tools.

- Karma. Unit testing tool.
- Protractor. Web automation testing tool to run e2e tests.
- Alternatives
  - Jest
  - theIntern
  - Cypress.io
- Angular testing utilities
  - TestBed
  - Async & fakeAsync
  - MockBackend

## AOT Compiler

When a browser requests for the application the original AngularJS sends
the Code & Framework, Templates, and compiler. The browser then compiles
the Templates to the DOM Functions JIT(Just in Time).

In Angular, AOT(ahead of time) compilation happens at the server, where
the templates are converted to the DOM functions before sending to the
browser, which provides a download size savings and time.

## Editors

TypeScript is required to use Angular. TS helps editor to

- Better Intellisense
- Catch Typing Bugs

Angular Language Service

- VS Code
- WebStorm
- Sublime Text


## Summary

- CLI
- AOT
- Better Editor Support


# Tips, Tricks and Gotchas

## Decorators

The syntax of decorator looks like `@Decorator(parameters)`. It is a new
type of syntax.

TS has its own learning curve.

## Custom Pipes

It let you format data. Pure pipe are default kind and impure pipe are
more advanced and extremely difficult to use.

Pure Pipe

- only evaluated when input changes.

Impure Pipe

- evaluated on every change detection cycle.

Module API

- imports
- exports
- bootstrap
- providers
- declarations

Multiple Modules

- feature areas
- lazy loading
- Difficulties
  - Routing
  - Importing and exporting

Cryptic Error Message

- Frequent
- Frustrating
- Slow Down development

Build

- Complex
- Important
- Affects Framework

Delivery Size

- more than 1MB even for a basic hello world app.
- constant improvement
- CLI

RXJS

- Promises vs. observables
- self-subscribe or not
- Forgetting to subscribe
- Accidentally subscribe multiple times.
- hot vs. cold observables.
- shared observables.

## Tips & Tricks

- Use the CLI
- Follow the style guide
- Do sorting and filtering in your components.
- Learn & use TypeScript
- Learn and use Ngrx.
- Learn Webpack
- use lazy loading
- use modern editor.
- Don't touch the DOM directly.
- Understand what you are sending down to the browser.
- Use immutable or observable data to maximise performance where
  appropriate.

# Angular, Present and Future
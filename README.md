<h1 align="center">Angular & TypeScript Intensive Training</h1>

<p align="center">
  <img alt="workshops-de-logo-blue" src="docs/logo-workshops-de.png" width="120">
  <br>
  <em>The best way to get started with Angular</em>
  <br>
</p>

<p align="center">
  <a href="https://workshops.de/seminare-schulungen-kurse/angular-typescript" target="_blank"><strong>workshops.de</strong></a>
  <br>
</p>

## Local Development

| Command         | Description                                       |
| --------------- | ------------------------------------------------- |
| `npm install`   | Installs the packages to develop the Angular app  |
| `npm start`     | Starts the Angular app                            |
| `npm test`      | Runs tests for the Angular app                    |
| `npm run build` | Compiles the Angular app in production mode       |
| `npm run lint`  | Runs static code analysis using [eslint][eslint]. |

## The API

| Command              | Description                                       |
| -------------------- | ------------------------------------------------- |
| `npx bookmonkey-api` | Installs and starts the HTTP API "Bookmonkey API" |

The API provides fake data that you can use in your Angular application.

> [!NOTE]
> The API starts at http://localhost:4730.
> When you open this page, you'll find documentation for all endpoints. 🚀

## AI Tutor (Beta)

This repository includes a Modern Angular Tutor that guides you step-by-step through building a complete Angular application using the latest patterns in **Angular v20**.

> [!WARNING]
> The AI Tutor feature is in beta and may occasionally provide incorrect information or code examples.

### Using the AI Tutor

The AI Tutor teaches through a **Learn-Apply-Feedback** cycle:

1. Learn a concept with explanations and examples
2. Apply knowledge with hands-on exercises
3. Get automatic feedback on your solution

### Example Prompts

| Prompt Type       | Examples                                                        |
| ----------------- | --------------------------------------------------------------- |
| **Get Started**   | "Let's start", "Hello"                                          |
| **Adjust Level**  | "Set my experience level to beginner", "Change my rating to 8"  |
| **View Progress** | "Where are we?", "Show the table of contents"                   |
| **Skip Module**   | "Skip this section", "Auto-complete this step for me"           |
| **Jump to Topic** | "Take me to the forms lesson", "Jump to services"               |
| **Get Help**      | "I'm stuck", "Give me a hint", "Show step-by-step instructions" |

### Troubleshooting

If the tutor doesn't respond correctly:

- Type "proceed" to nudge the tutor forward
- Correct the tutor if it misunderstands your progress
- Ask "What should I see in my UI?" to verify expected output
- Reload the browser window or start a new chat session
- For persistent issues, report them on [GitHub](https://github.com/angular/ai-tutor/issues)

## VS Code

If you are using [VS Code](https://code.visualstudio.com/) as you editor of choice, you might see a popup after opening this repository.
We added a few plugin recommendations to simplify writing code during the workshop:

1. Angular Language Service - Adds better syntax-highlighting & automatic refactorings
1. Prettier - Formats your code automatically in the same way across your project.

## Additional Resources

> From https://github.com/angular/angular

### Quickstart

[Get started in 5 minutes][quickstart].

### Documentation

Get started with Angular, learn the fundamentals, and explore advanced topics on our documentation website.

- [Getting Started][quickstart]
- [Documentation][documentation]
- [Angular Command Line (CLI)][cli]
- [Architecture][architecture]
- [Components and Templates][componentstemplates]
- [Forms][forms]
- [Angular Material][angularmaterial]
- [API][api]

#### Advanced

- [Angular Elements][angularelements]
- [Server Side Rendering][ssr]
- [Schematics][schematics]
- [Lazy Loading][lazyloading]

[eslint]: https://eslint.org/
[quickstart]: https://angular.dev/tutorials/learn-angular
[ng]: https://angular.dev
[documentation]: https://angular.dev/overview
[angularmaterial]: https://material.angular.io/
[cli]: https://angular.dev/tools/cli
[architecture]: https://angular.dev/essentials
[componentstemplates]: https://angular.dev/tutorials/learn-angular/1-components-in-angular
[forms]: https://angular.dev/tutorials/learn-angular/15-forms
[api]: https://angular.dev/api
[angularelements]: https://angular.dev/guide/elements
[ssr]: https://angular.dev/guide/ssr
[schematics]: https://angular.dev/tools/cli/schematics
[lazyloading]: https://angular.dev/guide/ngmodules/lazy-loading

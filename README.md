# Angular Cookbook Second Edition

This is the code repository for the [Angular-Cookbook-2E](https://www.packtpub.com/product/angular-cookbook-second-edition/9781803233444), published by Packt.

More details are below, pick up [your copy](https://www.amazon.com/Angular-Cookbook-actionable-recipes-developers-ebook/dp/B0C3MG5X99/ref=sr_1_2?crid=LESX4FJVT8Y&keywords=Angular+cookbook+second+edition&qid=1703577160&s=books&sprefix=angular+cookbook+second+editio%2Cstripbooks-intl-ship%2C271&sr=1-2) today!

**Over 80 actionable recipes every Angular developer should know**

The author of this book is - [Muhammad Ahsan Ayaz](https://www.linkedin.com/in/ahsanayaz/)

## Getting Started
Make sure you have [NodeJS](https://nodejs.org) installed in your machine.
Then from the project root, run the following:

```bash
npm install
```
This should install the dependencies of both the `start` and `final` monorepos.
## Serve Projects
Serve both the start and final projects, or one of them as follows:

```bash
npm run serve APP_NAME
## example
npm run serve cc-inputs-outputs # runs the starter app on localhost:4200
npm run serve cc-inputs-outputs final # runs the final app on localhost:4200
npm run serve cc-inputs-outputs both # runs both start and final apps on localhost:4200 and localhost:4201
```


## For Author/Maintainers

### Generate Projects
```shell
# Create starter app
npm run create CHAPTER_NO APP_NAME "APP_TITLE"
# Example
npm run create 01 cc-inputs-outputs "CC Inputs Outputs"
# Create apps for both start and final folders
npm run create 01 cc-inputs-outputs "CC Inputs Outputs" both
```

### Remove Projects (from both start and final folders)
```shell
# Create starter app
npm run remove CHAPTER_NO APP_NAME
# Example
npm run remove 01 cc-inputs-outputs
```

### Copy project from 'start' to 'final' mono repo
```shell
# Create starter app
npm run copy CHAPTER_NO APP_NAME
# Example
npm run copy 01 cc-inputs-outputs
```

### Generate e2e tests

```shell
cd start && npx nx g @nx/cypress:cypress-project chapter-number/your-app-name-e2e --project your-app-name
# ex
## cd start && npx nx g @nx/cypress:cypress-project chapter11/ng-cy-forms-e2e --project ny-cy-forms

# select 'vite' bundler when asked

cd ..

node scripts/rename-app.js chapter-number your-app-name-e2e folder
# ex
## node scripts/rename-app.js chapter11 ng-cy-forms-e2e start
## node scripts/rename-app.js chapter11 ng-cy-forms-e2e final
```

### Update global styles

```shell
cd codewithahsan && npm run build
cd ..
npm run copy:styles
```




## About the book
Angular has long been the framework of choice for web development projects of various scales, offering much-needed stability and a rich tooling ecosystem for building production-ready web and mobile apps. This recipe-based guide to Angular will help you build up your Angular expertise with a wide range of recipes across key tasks in web development and show you how to build high-performance apps.
In this second edition, the recipes have been updated, added, and improved based on developer feedback and new challenges. The first few chapters will show you how to utilize core Angular concepts such as components, directives, and services to get you ready for building frontend web apps. You’ll then develop web components with Angular and go on to learn about advanced concepts such as dynamic components loading and state management with NgRx for achieving real-time performance.
Later chapters will focus on recipes for effectively testing your Angular apps to make them fail-safe, before progressing to techniques for optimizing your app’s performance. Finally, you’ll create **Progressive Web Apps** (**PWA**) with Angular to provide an intuitive experience for users.
By the end of this book, you’ll be able to create full-fledged, professional-looking Angular apps and have the skills you need for frontend development.


 
## Key Takeaways
- Gain a better understanding of how components, services, and directives work in Angular
- Get to grips with creating Progressive Web Apps using Angular from scratch
- Build rich animations and add them to your Angular apps
- Manage your app’s data reactivity using RxJS
- Implement state management for your Angular apps with NgRx
- Optimize the performance of your new and existing web apps
- Write fail-safe unit tests and end-to-end tests for your web apps using Jest and Cypress
- Get familiar with Angular CDK components for designing effective Angular components


## What's New



## Outline and Chapter Summary



1. [Winning Component Communication](https://github.com/PacktPublishing/Angular-Cookbook-2E/tree/main/start/apps/chapter01)
2. [Working with Angular Directives and Built-In Control Flow](https://github.com/PacktPublishing/Angular-Cookbook-2E/tree/main/start/apps/chapter02)
3. [The Magic of Dependency Injection in Angular](https://github.com/PacktPublishing/Angular-Cookbook-2E/tree/main/start/apps/chapter03)
4. [Understanding Angular Animations](https://github.com/PacktPublishing/Angular-Cookbook-2E/tree/main/start/apps/chapter04)
5. [Angular and RxJS – Awesomeness Combined](https://github.com/PacktPublishing/Angular-Cookbook-2E/tree/main/start/apps/chapter05)
6. [Reactive State Management with NgRx](https://github.com/PacktPublishing/Angular-Cookbook-2E/tree/main/start/apps/chapter06)
7. [Understanding Angular Navigation and Routing](https://github.com/PacktPublishing/Angular-Cookbook-2E/tree/main/start/apps/chapter07)
8. [Mastering Angular Forms](https://github.com/PacktPublishing/Angular-Cookbook-2E/tree/main/start/apps/chapter08)
9. [Angular and the Angular CDK](https://github.com/PacktPublishing/Angular-Cookbook-2E/tree/main/start/apps/chapter09)
10. [Writing Unit Tests in Angular with Jest](https://github.com/PacktPublishing/Angular-Cookbook-2E/tree/main/start/apps/chapter10)
11. [E2E Tests in Angular with Cypress](https://github.com/PacktPublishing/Angular-Cookbook-2E/tree/main/start/apps/chapter11)
12. [Performance Optimization in Angular](https://github.com/PacktPublishing/Angular-Cookbook-2E/tree/main/start/apps/chapter12)
13. [Building PWAs with Angular](https://github.com/PacktPublishing/Angular-Cookbook-2E/tree/main/start/apps/chapter13)

### Chapter 01, Winning Component Communication


#### Key Insights:


### Chapter 02, Working with Angular Directives and Built-In Control Flow


#### Key Insights:


### Chapter 03, The Magic of Dependency Injection in Angular


#### Key Insights:


### Chapter 04, Understanding Angular Animations 


#### Key Insights:


### Chapter 05, Angular and RxJS – Awesomeness Combined

#### Key Insights:


### Chapter 06, Reactive State Management with NgRx

#### Key Insights:


### Chapter 07, Understanding Angular Navigation and Routing
#### Key Insights:


### Chapter 08, Mastering Angular Forms

#### Key Insights:

### Chapter 09, Angular and the Angular CDK

#### Key Insights:


### Chapter 10, Writing Unit Tests in Angular with Jest

#### Key Insights:


### Chapter 11, E2E Tests in Angular with Cypress

#### Key Insights:

### Chapter 12, Performance Optimization in Angular

#### Key Insights:


### Chapter 13, Building PWAs with Angular

#### Key Insights:


## Software and hardware list
| Chapter number | Software required | OS required |
| --- | --- | --- | --- |
| 1 -13 | Angular v17 | Mac OS X, Windows, or Linux(Any) |
| 1 -13 | Nx v17+ | Mac OS X, Windows, or Linux(Any) |
| 1 -13 | TypeScript 5.x | Mac OS X, Windows, or Linux(Any) |
| 1 -13 | NodeJS 18.x | Mac OS X, Windows, or Linux(Any) |



## Know more on the Discord server <img alt="Coding" height="25" width="32"  src="https://cliply.co/wp-content/uploads/2021/08/372108630_DISCORD_LOGO_400.gif">
You can get more engaged on the discord server for more latest updates and discussions in the community at [Discord](https://packt.link/AngularCookbook2e)


## Download a free PDF <img alt="Coding" height="25" width="40" src="https://emergency.com.au/wp-content/uploads/2021/03/free.gif">

_If you have already purchased a print or Kindle version of this book, you can get a DRM-free PDF version at no cost. Simply click on the link to claim your free PDF._
[Free-Ebook](https://packt.link/free-ebook/9781803233444) <img alt="Coding" height="15" width="35"  src="https://media.tenor.com/ex_HDD_k5P8AAAAi/habbo-habbohotel.gif">


We also provide a PDF file that has color images of the screenshots/diagrams used in this book at [GraphicBundle](https://packt.link/gbp/9781803233444) <img alt="Coding" height="15" width="35"  src="https://media.tenor.com/ex_HDD_k5P8AAAAi/habbo-habbohotel.gif">


## Get to know the Author
_Muhammad Ahsan Ayaz_ is a Google developers expert in Angular, a software architect, and a head instructor of JavaScript at the School of Applied Technology. He loves helping the start-up ecosystem and product owners to bring their ideas to life using JavaScript, Angular, and web technologies. He has built several open-source projects that he maintains and he speaks at events, along with creating articles and video courses.


## Other Related Books
- [Learning Angular, Fourth Edition](https://www.packtpub.com/product/learning-angular-fourth-edition/9781803240602)
- [Angular Projects, Third Edition](https://www.packtpub.com/product/angular-projects-third-edition/9781803239118)
- [Angular for Enterprise Applications, Third Edition](https://www.packtpub.com/product/angular-for-enterprise-applications-third-edition/9781805127123)

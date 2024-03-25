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
-	Almost all recipes have been improved according to Angular v17 standards
-	Additional recipes have been added, including topics related to Angular signals, form arrays in Reactive Forms, new control flow, and deferred loading. 
-	The codebase now uses NX, which makes it easier to upgrade all of the recipes to future Angular versions.


## New Edition v/s Previous Edition
The new edition contains all of the recipes updated to Angular v17 with the possibility to upgrade to future versions with ease. This was not possible with the codebase for the previous edition. The new edition also introduces updated UI/UX for all the recipes with enhanced tooling which provides more learning for curious developers peeking into the code repository.


## Outline and Chapter Summary
Angular is one of the most popular frameworks in the world for building not only web applications but even mobile and desktop applications as well. Backed by Google and used by Google, this framework is used by millions of applications. Although the framework is well-suited for applications of any scale, enterprises particularly favor Angular due to its opinionated nature and its consistent ecosystem, which includes all the tools necessary for creating modern & production-ready web applications.
While learning the core technologies such as JavaScript, HTML, and CSS is an absolute essential to progress as a web developer, when it comes to a framework, learning the core concepts of the framework itself is important too. When we’re dealing with Angular, there are a lot of amazing things we can do with our web applications by learning about, and using, the right tools in the Angular ecosystem. That’s where this book comes in.
This book was written for intermediate and advanced Angular developers to polish their Angular development skills with recipes that you can follow easily, play around with, and practice your own variations of. You’ll not only learn from the recipes themselves but also from the actual real-life projects associated with the recipes. So, there are a lot of hidden gems in these recipes and projects for you.
Happy coding!


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
Chapter 1, "Winning Component Communication," serves as a comprehensive guide to mastering component communication within Angular. The chapter delves into various techniques for establishing effective communication between components, shedding light on essential concepts such as @Input() and @Output() decorators, services, and lifecycle hooks. Notably, it introduces readers to Angular Signals, a stable feature implemented since Angular v17, offering a robust means of communication.

Throughout the chapter, readers will gain a nuanced understanding of different communication techniques, allowing them to discern the most suitable approach for specific scenarios. A key highlight is the exploration of the Signals API, a stable feature post Angular v17, providing readers with the latest insights into Angular's evolving communication mechanisms. The chapter culminates in a practical exploration of diverse recipes, each addressing specific scenarios, such as component communication using properties, services, setters, ngOnChanges, template variables, ViewChild, standalone components, and data passing through route params.

#### Key Insights:
- **Techniques for Component Communication**: The chapter provides a detailed exploration of various techniques for establishing communication between components in Angular. Readers gain insights into the effective use of @Input() and @Output() decorators, services, and lifecycle hooks, crucial for building robust Angular applications.
- **Angular Signals Stability**: An important highlight is the discussion on Angular Signals, emphasizing their stability since Angular v17. This feature serves as a powerful and stable tool for facilitating communication between components, offering readers an up-to-date and reliable approach to implement in their projects.
- **Nuanced Understanding of Communication Techniques**: Readers not only learn about different communication techniques but also gain a nuanced understanding of when and where to apply each technique. This practical knowledge enables developers to make informed decisions based on the specific requirements of their Angular applications.
- **Latest Insights with Signals API**: The chapter introduces readers to the Signals API, showcasing its significance and relevance in the latest Angular versions. By staying current with the Signals API, developers can leverage the latest advancements in Angular's communication mechanisms to enhance their projects.
- **Practical Recipes**: The chapter concludes with a set of practical recipes, offering hands-on guidance for implementing component communication. Readers explore diverse scenarios, including communication through properties, services, setters, ngOnChanges, template variables, ViewChild, standalone components, and data passing via route params, ensuring a comprehensive understanding of real-world use cases.



### Chapter 02, Working with Angular Directives and Built-In Control Flow
Chapter 2 delves into the realm of Angular directives, offering readers a comprehensive understanding of attribute directives, structural directives, and the Directive Composition API. By exploring real-world examples, developers gain valuable insights into the practical application of these directives, enhancing their ability to manipulate the **Document Object Model** (**DOM**) effectively.

The chapter not only provides theoretical insights but also guides readers through the creation of practical and impactful directives. From handling the appearance of elements with attribute directives to crafting a directive for calculating article read time, readers are equipped with hands-on experience. The exploration extends to writing custom structural directives, demonstrating the collaborative workings of ViewContainer and TemplateRef services. Furthermore, the chapter introduces the Directive Composition API, empowering developers to seamlessly apply multiple directives to a single element, showcasing the versatility and depth of Angular's directive system.

#### Key Insights:
- **Directive Fundamentals**: Chapter 2 is a deep dive into Angular directives, elucidating the intricacies of both attribute and structural directives. Developers gain a foundational understanding of these essential building blocks for creating dynamic and interactive Angular applications.
- **Real-world Application**: The chapter goes beyond theory by providing a tangible example of using a directive to highlight text during searches. This real-world application enhances the reader's comprehension and demonstrates the practical utility of Angular directives in creating user-friendly interfaces.
- **Structural Directives Unveiled**: Readers are guided through the creation of a custom structural directive, unveiling the inner workings of ViewContainer and TemplateRef services. This hands-on experience enables developers to manipulate the DOM dynamically, akin to the familiar *ngIf directive.
- **Custom Attribute Directives**: The chapter extends the exploration to the creation of custom attribute directives, showcasing their versatility in performing diverse tasks. From managing element appearance to calculating article read time, developers gain insights into harnessing the power of Angular directives for varied purposes.
- **Directive Composition API**: The introduction of the Directive Composition API adds a layer of sophistication, enabling developers to apply multiple directives to a single element seamlessly. This feature underscores Angular's flexibility and provides a valuable tool for enhancing component functionality.



### Chapter 03, The Magic of Dependency Injection in Angular
Chapter 3, "The Magic of Dependency Injection in Angular," provides an in-depth exploration of **Dependency Injection** (**DI**) within the Angular framework, uncovering its intricacies and practical applications. The chapter introduces advanced concepts such as optional dependencies, injection token configuration, and the utilization of 'providedIn: 'root'' metadata for Angular services. Readers are guided through creating singleton services using different approaches, including 'forRoot()' and dynamic configurations with value providers. The emphasis is on mastering the art of DI, a pivotal process in Angular that seamlessly injects dependencies into various components, directives, and services.

Throughout the chapter, developers gain hands-on experience, honing their skills in utilizing DI tokens and managing optional dependencies. The comprehensive coverage of creating singleton services and providing alternate classes against the same DI token equips readers with practical insights. By the end, developers have a solid foundation in leveraging Dependency Injection effectively, empowering them to enhance the efficiency and scalability of their Angular projects with dynamic configurations and advanced provider techniques.

#### Key Insights:
- **Advanced Dependency Injection Techniques**: Chapter 3 delves into sophisticated **Dependency Injection** (**DI**) concepts, such as optional dependencies, injection token configuration, and using 'providedIn: 'root'' metadata, enabling readers to master the intricacies of DI in Angular.
- **Singleton Service Strategies**: The chapter provides practical guidance on creating singleton services, offering multiple approaches like 'providedIn' and 'forRoot()' for effective singleton service management, ensuring a robust foundation for readers to optimize service instances.
- **Provider Flexibility**: Developers learn to provide alternate classes against the same DI token, showcasing the flexibility of Angular's DI system. This insight empowers them to tailor their applications to specific needs by dynamically configuring providers based on varying requirements.
- **Dynamic Configurations with Value Providers**: The chapter explores dynamic configurations using value providers, demonstrating how developers can enhance application flexibility by dynamically adjusting configurations through Angular's powerful DI system.
- **Holistic Understanding of Dependency Injection**: Readers gain a comprehensive understanding of DI in Angular, reinforcing its significance



### Chapter 04, Understanding Angular Animations 
Chapter 4 provides an in-depth exploration of Angular animations, offering practical recipes for developers to implement dynamic multi-state animations, staggering effects, and keyframe animations. Readers gain valuable insights into creating engaging user experiences through seamless transitions and animations that enhance the visual appeal of Angular applications.

The chapter covers a spectrum of animation techniques, including the creation of two-state animations, handling multi-state scenarios, and employing keyframes for intricate animations. Developers are equipped with the knowledge to animate lists efficiently using stagger animations, understand the nuances of sequential versus parallel animations, and implement route animations seamlessly. The inclusion of conditional animation disabling further enhances developers' mastery over Angular animation capabilities, ensuring they can tailor animations to specific application requirements.

#### Key Insights:
- **Diverse Animation Techniques**: Chapter 4 delves into various Angular animation techniques, allowing developers to create a range of dynamic effects. From fundamental two-state animations to complex multi-state transitions and keyframe-based animations, the chapter provides a comprehensive understanding of Angular's animation capabilities.
- **Enhanced User Experiences**: By mastering the recipes in this chapter, developers gain the expertise to craft engaging user experiences. The inclusion of stagger animations for lists and insights into sequential versus parallel animations empowers developers to make informed choices, ensuring animations align with the application's visual and interactive requirements.
- **Route Animations and Conditional Disabling**: The chapter extends its coverage to crucial aspects like route animations, demonstrating how to seamlessly integrate animations into route transitions. Additionally, developers learn how to conditionally disable animations, offering flexibility in handling specific scenarios where animation might need to be temporarily turned off based on application logic.



### Chapter 05, Angular and RxJS – Awesomeness Combined
Chapter 5, "Angular and RxJS – Awesomeness Combined," is a comprehensive guide to leveraging the powerful combination of Angular and RxJS. The chapter explores various recipes that showcase the synergy between Angular and reactive programming with RxJS. Developers will learn how to execute sequential and parallel HTTP calls efficiently, tapping into the capabilities of operators such as combineLatest, flatMap, debounceTime, and switchMap. The emphasis is not only on theoretical concepts but also on practical tips and tricks for effectively working with RxJS streams in Angular applications.

The fusion of Angular and RxJS enables developers to embrace a reactive approach, allowing for the seamless handling of data, efficient stream management, and the implementation of intricate business logic. Through practical recipes, the chapter equips readers with the skills to navigate the intricacies of reactive programming and apply them to enhance the functionality and performance of Angular applications. From managing multiple observable streams to addressing memory leaks through proper stream unsubscribing, the recipes cover a spectrum of scenarios, ensuring developers can harness the full potential of Angular and RxJS combined.

#### Key Insights:
- **Reactive Powerhouse**: The chapter underscores the potent collaboration between Angular and RxJS, emphasizing their collective strength in enabling reactive programming paradigms. Developers gain insights into leveraging this dynamic duo for handling data reactively and implementing sophisticated business logic within Angular applications.
- **Efficient HTTP Call Handling**: Practical recipes delve into the intricacies of executing HTTP calls sequentially and in parallel using RxJS. The inclusion of operators like combineLatest, flatMap, debounceTime, and switchMap empowers developers to optimize their approach to HTTP requests, enhancing performance and responsiveness.
- **Stream Management Techniques**: The chapter provides practical guidance on managing multiple observable streams effectively. Developers learn essential techniques such as unsubscribing from streams to prevent memory leaks and leveraging Angular's async pipe for automatic stream unsubscription, contributing to robust and memory-efficient code.
- **Operator Mastery**: Readers are introduced to various RxJS operators, including the map operator for data transformation. The recipes showcase how operators like switchMap and debounceTime can be employed in scenarios such as implementing autocompletes, highlighting their role in achieving better application performance.
- **Custom Operator Creation**: Developers are guided through the creation of custom RxJS operators, empowering them to tailor their reactive workflows to specific application requirements. This insight into custom operator development expands the toolkit available for handling complex scenarios in Angular applications.
- **Error Resilience**: The chapter concludes by addressing the importance of error handling in HTTP calls through recipes demonstrating how to retry failed requests using RxJS. This insight enhances the robustness of Angular applications, ensuring graceful handling of unforeseen errors in communication with external services.



### Chapter 06, Reactive State Management with NgRx
Chapter 6 delves into the realm of reactive state management in Angular applications through the lens of the powerful NgRx library. Readers are introduced to core concepts such as NgRx actions, reducers, selectors, and effects, unraveling the framework's capabilities for handling application state reactively. The chapter emphasizes the symbiotic relationship between Angular and reactive programming, highlighting how NgRx, or Angular Reactive Extensions, elevates this synergy by providing a suite of reactive extensions tailored for Angular applications. Developers gain practical insights into creating an NgRx store with actions and reducers, utilizing NgRx Store Devtools for effective state debugging, employing selectors for seamless state rendering in components, and harnessing NgRx effects for streamlined API data retrieval. Additionally, the chapter explores the use of NgRx Component Store, showcasing its role in efficiently managing the state of individual components within the Angular ecosystem.

This chapter serves as a comprehensive guide to mastering reactive state management in Angular, leveraging the robust capabilities of the NgRx library. The narrative underscores the intrinsic value of handling application state reactively, positioning NgRx as a pivotal framework for achieving this objective. Developers are equipped with practical recipes that span the entire NgRx ecosystem, from establishing the foundational NgRx store with actions and reducers to employing advanced tools like NgRx Store Devtools for proficient state debugging. The incorporation of NgRx selectors and effects enriches developers with techniques for seamlessly rendering state in components and executing API calls with reactivity in mind. The chapter culminates by introducing NgRx Component Store as a strategic solution for efficiently managing the state of individual components, offering a holistic exploration of NgRx's prowess in advancing reactive state management practices within Angular applications.

#### Key Insights:
- **NgRx Essentials**: The chapter delves into core NgRx concepts, emphasizing the importance of actions, reducers, selectors, and effects in the NgRx ecosystem.
- **Reactive State Management**: Angular's synergy with reactive programming takes center stage, showcasing how NgRx elevates the management of application state through its reactive extensions.
- **Debugging with NgRx Store Devtools**: Developers gain insights into debugging state changes effectively using NgRx Store Devtools, a valuable tool for optimizing and troubleshooting NgRx-powered applications.
- **Selective Rendering with NgRx Selectors**: The usage of NgRx selectors is explored, providing a mechanism to selectively render and display specific slices of state within Angular components.
- **Efficient API Calls with NgRx Effects**: NgRx effects emerge as a powerful tool for handling API calls reactively, contributing to the efficient management of data flow in Angular applications.
- **NgRx Component Store Mastery**: The chapter introduces NgRx Component Store, offering a nuanced understanding of how this extension aids in managing the state of individual components within the NgRx framework.



### Chapter 07, Understanding Angular Navigation and Routing
Chapter 7, "Understanding Angular Navigation and Routing," unlocks the full potential of Angular's navigation and routing capabilities. It unveils the Angular router as a cornerstone of the framework, emphasizing its role within the holistic Angular ecosystem. This chapter transcends the basics, guiding developers through advanced routing techniques essential for crafting dynamic and responsive Angular applications. From creating routes in standalone apps to harnessing the power of lazily loaded routes, developers gain insights into optimizing performance through preloading route strategies.

The chapter delves into route security, introducing route guards for authorized access control. It equips developers with the expertise to dynamically guard routes, listen to changes, and configure global actions for a flexible and secure navigation framework. Addressing dynamic scenarios, the chapter provides valuable insights into handling route parameters dynamically. As a cherry on top, it concludes with strategies to elevate user experience, demonstrating how to seamlessly integrate a global loader between route changes, ensuring a smooth and visually engaging navigation flow for users.

#### Key Insights:
- **Angular Router Essentials**: The chapter delves into the critical role of the Angular router within the broader Angular ecosystem, emphasizing its significance as more than just a library but an entire framework.
- **Advanced Routing Techniques**: Developers are equipped with advanced techniques for effective routing and navigation in Angular. This includes insights into creating routes in standalone Angular applications, leveraging lazily loaded routes, and implementing preloading route strategies for optimized performance.
- **Route Security and Authorization**: Security measures take center stage as the chapter covers essential concepts such as route guards, ensuring authorized access to routes. Developers gain proficiency in guarding routes, listening to route changes, and configuring global actions dynamically.
- **Dynamic Route Parameter Handling**: Practical guidance is provided on working with dynamic route parameters, offering developers a comprehensive understanding of managing and manipulating route parameters effectively.
- **Enhancing User Experience**: The chapter concludes with strategies to enhance user experience during route changes, demonstrating how to implement a global loader between route transitions for a seamless and visually appealing navigation experience in Angular applications.



### Chapter 08, Mastering Angular Forms
Chapter 8, "Mastering Angular Forms," is a comprehensive guide that unveils the intricacies of working with forms in Angular. Covering both template-driven and reactive forms, developers gain practical insights into creating seamless user experiences for tasks ranging from user authentication to critical business data input. The chapter takes a hands-on approach, guiding developers through the creation of their first template-driven form with built-in validation, ensuring data integrity right from the start.

Expanding on this foundation, the chapter delves into reactive forms, showcasing how to implement form validation and effectively test forms within the Angular framework. An exploration of advanced form handling techniques includes topics such as server-side validation using asynchronous validator functions, mastering complex forms through reactive FormArray, and empowering developers to craft custom form controls using the ControlValueAccessor. This chapter equips developers with the skills to overcome the challenges of form implementation, ensuring they can proficiently design, validate, and test forms, delivering a polished and user-friendly experience in Angular applications.

#### Key Insights:
- **Versatility of Form Handling**: The chapter provides a dual perspective on form handling by covering both template-driven and reactive forms, showcasing the versatility Angular offers in addressing various application requirements.
- **Practical Guidance for Data Integrity**: Developers receive practical guidance on creating their first template-driven form with validation, emphasizing the importance of maintaining data integrity from the initial stages of form implementation.
- **Holistic Approach to Form Testing**: The chapter adopts a holistic approach to form testing within the Angular framework, ensuring developers are well-versed in validating and testing forms to guarantee robust functionality.
- **Asynchronous Validation Techniques**: It introduces advanced techniques such as server-side validation using asynchronous validator functions, demonstrating how Angular accommodates real-world scenarios with asynchronous data validation.
- **Empowering Developers with Reactive FormArray**: Developers gain insights into mastering complex forms through the use of reactive FormArray, providing a comprehensive understanding of managing dynamic and data-intensive forms efficiently.
- **Custom Form Control Creation**: The chapter empowers developers to extend their capabilities by guiding them through the process of creating custom form controls using ControlValueAccessor, enabling a tailored approach to form elements in Angular applications.


### Chapter 09, Angular and the Angular CDK
The chapter delves into the powerful realm of Angular and the **Angular Component Dev Kit** (**CDK**). By exploring a series of practical recipes, developers gain insights into leveraging the Angular CDK for various tasks, including virtual scrolling for handling large lists, implementing keyboard navigation for lists, and utilizing the Overlay API for creating pointy popovers. The CDK emerges as an indispensable companion for developers seeking to implement custom interactions and behaviors in Angular applications without the need for extensive external libraries.

Angular's ecosystem, encompassing tools like Angular Material and the Angular CLI, is enriched by the Angular CDK. The chapter unfolds with a showcase of recipes covering essential CDK functionalities such as drag and drop using the CDK API, building multi-step games with the CDK stepper API, and ensuring accessible listbox interactions through CDK listbox directives. Developers are guided through the process of working with nested menus using the Angular CDK menu API, highlighting the versatility and optimization capabilities offered by Angular in combination with the CDK.

#### Key Insights:
- **Angular CDK's Versatility**: The chapter highlights the **Angular Component Dev Kit's** (**CDK**) versatility, showcasing its role as an essential toolkit for Angular developers. It emphasizes how the CDK empowers developers to implement custom interactions and behaviors in Angular applications without heavy reliance on external libraries.
- **Practical CDK Implementations**: Developers gain hands-on experience through practical recipes, including virtual scrolling for efficient handling of large lists, keyboard navigation enhancements, and the creation of pointy popovers using the Overlay API. These examples underscore the CDK's practical utility in addressing common challenges in Angular development.
- **Optimized User Experiences**: The chapter demonstrates the synergy between Angular and the CDK in crafting optimized user experiences. By exploring functionalities like drag and drop, multi-step games, and accessible listbox interactions, developers learn how to harness the CDK to enhance the interactivity and performance of their Angular applications.



### Chapter 10, Writing Unit Tests in Angular with Jest
Empowering Robust Applications with Tests: Chapter 10 delves into the critical aspect of ensuring application robustness through effective unit testing in Angular using Jest. The chapter begins by addressing the common challenge of the "It works on my machine" phenomenon, emphasizing the importance of robust testing for quality assurance. The author introduces Jest as a preferred choice for unit testing, highlighting its speed, lightweight nature, and user-friendly API. Developers are guided through the configuration of Jest with Angular, emphasizing its advantages over the default Karma and Jasmine setup. The recipes within this chapter cover a spectrum of testing scenarios, including components, services, pipes, and the mocking of dependencies, offering a comprehensive approach to enhancing application reliability.

Comprehensive Jest Testing Techniques: The chapter provides an in-depth exploration of Jest testing techniques, offering practical insights for developers. From setting up unit tests in Angular with Jest to providing global mocks, mocking services, child components, and directives, the recipes encompass various aspects of Angular application testing. Special attention is given to testing components with observables, showcasing the importance of handling asynchronous operations in unit tests. The chapter also introduces Angular CDK component harnesses as a tool to simplify and enhance testing procedures. By the end, developers gain proficiency in employing Jest for unit testing in Angular, contributing to the creation of robust and reliable applications.

#### Key Insights:
- **Jest as a Powerful Testing Tool**: The chapter underscores the significance of unit testing in ensuring application reliability and introduces Jest as a preferred testing tool due to its speed, lightweight nature, and user-friendly API.
- **Comprehensive Testing Scenarios**: Developers are guided through a range of testing scenarios, including components, services, pipes, and the mocking of dependencies, providing a holistic approach to testing Angular applications.
- **Advantages Over Default Setup**: The chapter highlights the advantages of configuring Jest with Angular over the default Karma and Jasmine setup, emphasizing its efficiency and effectiveness in running tests in parallel.
- **Handling Asynchronous Operations**: Special attention is given to testing components with observables, showcasing techniques for handling asynchronous operations in unit tests, a common challenge in Angular applications.
- **Simplifying Testing Procedures**: The introduction of Angular CDK component harnesses serves as a valuable tool for simplifying and enhancing testing procedures, contributing to a more streamlined and efficient testing workflow.



### Chapter 11, E2E Tests in Angular with Cypress
Elevating Reliability through E2E Testing: Chapter 11 delves into the realm of **End-to-End** (**E2E**) testing using Cypress in Angular applications, emphasizing the pivotal role of such tests in ensuring the overall reliability of an application. The chapter introduces Cypress as a robust tool for E2E testing, particularly suitable for capturing the intricate flow of modern applications, making it an essential skill for developers in today's landscape.

Practical Recipes for Cypress: Developers are presented with practical recipes that illuminate the E2E testing process using Cypress in Angular apps. From crafting the first Cypress test to validating DOM elements, testing form inputs and submissions, waiting for **XMLHttpRequests** (**XHRs**) completion, utilizing Cypress bundled packages, and leveraging Cypress fixtures for mock data – the chapter equips developers with a comprehensive toolkit for executing effective E2E tests. The focus on practical, real-world scenarios ensures that developers can seamlessly integrate these techniques into their testing workflows for enhanced application quality.

#### Key Insights:
- **Comprehensive E2E Test Coverage**: The chapter covers various aspects of E2E testing, highlighting its role in providing comprehensive test coverage for Angular applications. This aligns with modern development practices that prioritize testing to ensure the robustness of applications, particularly in the context of evolving business needs and complex application architectures.
- **Form Validation and Interaction**: Specific recipes delve into E2E testing scenarios such as validating form inputs and submissions. This practical focus addresses common user interactions within Angular applications, allowing developers to simulate and test user input scenarios to ensure the correctness and reliability of forms.
- **XHR Handling and Mocking**: The chapter extends its coverage to waiting for **XMLHttpRequests** (**XHRs**) to finish during testing. This is crucial for scenarios where asynchronous operations are a significant part of the application logic. Additionally, the ability to mock HTTP call responses using Cypress provides developers with control over external dependencies, fostering a controlled and isolated testing environment.
- **Utilizing Cypress Featuresv**: Developers learn how to leverage Cypress features like bundled packages and fixtures. Using bundled packages ensures efficient management of dependencies, while fixtures enable the provision of mock data for testing purposes. These insights contribute to creating a robust and effective E2E testing strategy.
- **Practical Implementation**: By providing practical recipes, the chapter aims to bridge the gap between theoretical understanding and hands-on implementation. Developers are equipped not only with theoretical knowledge about the importance of E2E testing but also with the practical skills needed to implement effective testing strategies using Cypress in Angular applications.



### Chapter 12, Performance Optimization in Angular
In Chapter 12, the focus is on enhancing the performance of Angular applications through a series of effective techniques. By implementing the OnPush change detection strategy, developers can optimize an app's performance by selectively updating component subtrees, reducing unnecessary rendering cycles. The chapter also explores the advantages of lazily loading feature routes, which aids in more efficient resource utilization and faster initial app loading times. Additional insights include detaching the change detector from components, leveraging web workers for computationally intensive tasks, and employing pure pipes to offload heavy computations. The inclusion of practical recipes, such as using performance budgets for auditing and analyzing bundles with webpack-bundle-analyzer, equips developers with actionable strategies to assess and improve their Angular app's performance systematically.

Recognizing the critical role of performance in user satisfaction and retention, the chapter emphasizes the importance of identifying and implementing optimization methods. By presenting a diverse set of strategies, developers gain a holistic understanding of how to address performance challenges in Angular applications. The provided recipes cover various aspects, from fine-tuning change detection strategies to exploring advanced tools like web workers and performance analyzers. This comprehensive approach empowers developers to proactively enhance the performance of their Angular apps, fostering a seamless and responsive user experience.

#### Key Insights:
- **OnPush Change Detection Strategy**: The chapter advocates for the use of the OnPush change detection strategy to optimize Angular app performance. This strategy selectively updates component subtrees, minimizing unnecessary rendering cycles and enhancing efficiency.
- **Lazily Loading Feature Routes**: Lazily loading feature routes is highlighted as an effective technique to improve resource utilization and reduce initial app loading times. This approach ensures that only the necessary components are loaded when required, contributing to a more responsive user experience.
- **Detaching Change Detector**: The chapter introduces the concept of detaching the change detector from components, providing insights into how this can further streamline the update process and contribute to overall performance improvements.
- **Web Workers for Heavy Computation**: Developers are encouraged to leverage web workers for computationally intensive tasks, allowing heavy computations to be performed in the background without affecting the main application thread, leading to a more responsive UI.
- **Pure Pipes for Heavy Computation**: The use of pure pipes is recommended for moving heavy computation away from the main thread. This approach helps in optimizing Angular apps by offloading computation to a separate layer, improving overall performance.
- **Performance Budgets and Auditing**: Developers are advised to use performance budgets for auditing, emphasizing the importance of setting benchmarks to ensure that an Angular app meets predefined performance criteria, preventing degradation over time.
- **Bundle Analysis with webpack-bundle-analyzer**: The chapter introduces webpack-bundle-analyzer as a tool for analyzing bundles, enabling developers to identify and address issues related to bundle size and dependencies, thereby optimizing the application's performance.



### Chapter 13, Building PWAs with Angular
**Progressive Web Apps** (**PWAs**) represent the cutting edge of web technology, seamlessly blending the strengths of web and mobile applications. Angular, with its built-in PWA support, emerges as an ideal platform for constructing robust and high-performance web applications. This chapter delves into the intricacies of PWAs, offering a comprehensive guide through the lens of Angular. The recipes cover essential aspects such as converting an existing Angular app into a PWA using the Angular CLI, modifying the theme color, implementing dark mode, customizing the installable experience, and leveraging Angular's service worker for efficient request precaching. By exploring these recipes, developers can transform their Angular applications into progressive web apps, ensuring installability, capabilities, speed, and reliability, even in challenging network conditions.

Angular's innate PWA features empower developers to enhance user experiences by providing seamless offline functionality and optimal performance. The chapter underscores the significance of PWAs as a significant leap in web technology, offering users a cohesive experience across various browsers and devices. The recipes serve as a practical guide for developers to implement key PWA features within their Angular applications, aligning with the broader industry shift towards resilient and user-centric web development practices. Through the exploration of themes, dark mode, custom installations, and service worker strategies, developers can harness the full potential of Angular for building progressive web apps that excel in both modern and legacy browser environments.

#### Key Insights:
- **PWA Evolution**: The chapter underscores the evolution of web applications into **Progressive Web Apps** (**PWAs**) and their pivotal role in providing users with a seamless experience that combines the best features of both web and mobile applications.
- **Angular PWA Support**: Angular's built-in support for PWAs positions it as an ideal framework for crafting resilient and high-performance web applications. The chapter emphasizes Angular's capabilities in making apps installable, capable, fast, and reliable, contributing to a robust PWA development experience.
- **Practical Implementation**: The recipes in the chapter offer practical insights and step-by-step guidance on transforming an existing Angular app into a PWA using the Angular CLI. Developers gain knowledge on crucial aspects such as theme color modification, dark mode implementation, custom installable experiences, precaching requests with Angular service workers, and the creation of an app shell for improved PWA performance.
- **User Experience Enhancement**: The focus on themes, dark mode, and custom installations reflects the chapter's commitment to enhancing user experiences. By leveraging Angular's PWA features, developers can ensure optimal performance and functionality, even in challenging network conditions.
- **Aligning with Industry Trends**: The chapter aligns with the broader industry trend towards progressive web development practices, showcasing the relevance and significance of PWAs in delivering a consistent and reliable experience across diverse browsers and devices.



## Software and hardware list

| Chapter Number | Software required | OS required    |
|:---:  |:---:  |:---:  |
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

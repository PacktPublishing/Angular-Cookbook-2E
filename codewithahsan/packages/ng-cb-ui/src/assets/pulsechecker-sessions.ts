type PulseCheckerSessions = Record<
  string,
  {
    id: string;
    pin: string;
    title: string;
  }
>;

export const PULSE_CHECKER_SESSIONS: PulseCheckerSessions = {
  'cc-inputs-outputs': {
    id: 'e0f4082b-5140-47ea-bb54-529815214502',
    pin: 'qb8Pk',
    title:
      'Component Communication using @Input() & @Output() | Angular Cookbook 2nd Ed. Recipe',
  },
  'cc-ng-on-changes': {
    id: 'f61f9388-5ff9-432f-84ae-978e0d62d201',
    pin: 'RzA4i',
    title:
      'Component Communication using ngOnChanges | Angular Cookbook 2nd Ed. Recipe',
  },
  'cc-services': {
    id: 'dfb810c4-72b5-49d8-b15b-a4fbfaa2498f',
    pin: '9O4iq',
    title:
      'Component Communication using Services | Angular Cookbook 2nd Ed. Recipe',
  },
  'cc-setters': {
    id: '2b897992-539e-4740-a625-ad8c7a41194f',
    pin: 'VxG3h',
    title:
      'Intercepting @Input() changes using setters | Angular Cookbook 2nd Ed. Recipe',
  },
  'cc-standalone-components': {
    id: '8aad7a89-acc1-4017-84cd-8c455421826a',
    pin: 'pFbbn',
    title:
      'Standalone components & communicating between Routes | Angular Cookbook 2nd Ed. Recipe',
  },
  'cc-template-vars': {
    id: 'd8f7d197-cf02-4e22-ac9d-5ab90860ed4b',
    pin: 'ApXeB',
    title:
      'Component Communication using Template Variables | Angular Cookbook 2nd Ed. Recipe',
  },
  'cc-view-child': {
    id: '4d8fc48b-dc64-4ca4-b03a-e430b89cfc4e',
    pin: 'v3hjd',
    title:
      'Components Communication using ViewChild() | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-cc-signals': {
    id: '980d6502-076d-454a-94dc-f0540af3f7ab',
    pin: 'BDu2f',
    title:
      'Component communication using Signals | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-attribute-directive': {
    id: '1217f9e8-6a45-4e50-84f6-5169eb588832',
    pin: 'abwyU',
    title: 'Attribute Directive in Angular | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-control-flow': {
    id: '0a79ae75-b5f3-48cf-995b-f0d64609ad45',
    pin: 'yHANA',
    title: "Angular's new control flow | Angular Cookbook 2nd Ed. Recipe",
  },
  'ng-directive-comp-api': {
    id: 'a0b75a7a-a65d-480e-9f98-3bce8702db36',
    pin: 'wMv8D',
    title: 'Directive Composition API | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-multi-struc-directives': {
    id: '8d6f5935-38d1-4c39-8125-d0d42290808b',
    pin: 'upDLb',
    title:
      'How to use *ngIf and *ngSwitch together | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-read-time-directive': {
    id: '6132c102-b12e-4801-99e6-cc96a1cefbe4',
    pin: 'zio4u',
    title: 'Read Time Directive | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-scroll-to-directive': {
    id: '919250b7-9530-4f07-af69-0f42d262142c',
    pin: 'XmC5b',
    title: 'Scroll-To Directive | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-show-for-directive': {
    id: '4505c1f8-21b5-459b-bad0-a31688d47618',
    pin: 'Erdzv',
    title: '*appShowFor Structural Directive | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-aliased-class-providers': {
    id: 'b16b4cd7-3712-4d98-8bc6-c5d94912b972',
    pin: 'DrxWb',
    title:
      'Providing alternate classes against same DI Token | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-di-token': {
    id: 'bbd9307a-106a-40b6-9c61-42d647ded52c',
    pin: 'tukQL',
    title:
      'Providing a class to Angular using DI Tokens | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-optional-dependencies': {
    id: '4550fb1e-4d2b-43b1-884a-e5173b3e6e2e',
    pin: '6evla',
    title: 'Angular Optional Dependencies | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-singleton-service': {
    id: '37206546-34d1-49a4-aaf8-fab90bb473ab',
    pin: '1wDFu',
    title: 'Angular Singleton Service | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-singleton-service-forroot': {
    id: 'd7211272-b5ff-499f-8b8b-d471c2a72b35',
    pin: 'SQq-U',
    title:
      'Angular Singleton Service - forRoot() | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-value-providers': {
    id: 'eb1fd153-56db-43f0-b29e-63d763b2e6cd',
    pin: 'XMzCy',
    title:
      'Dynamic configurations using value providers | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-animating-lists': {
    id: '1a5789fd-2390-47c4-9160-b4f51c7fd9fc',
    pin: 't6B1B',
    title:
      'Lists using staggering animations in Angular | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-animations-keyframes': {
    id: '96e857f2-e16e-4fbc-8c7f-a083121882b4',
    pin: 'XB5G3',
    title:
      'Angular Animations with Keyframes | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-basic-animation': {
    id: '64b01517-9e62-404b-b7b5-1e4279e8c47b',
    pin: 'tq-TR',
    title:
      'Angular Basic (two-state) Animation | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-disable-animations': {
    id: 'fff35b54-831d-422d-aaf6-ee85f485db62',
    pin: 'yOK6X',
    title:
      'Disabling Angular animations conditionally | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-multi-state-animations': {
    id: '33848310-26e4-4fa2-bedd-8ec8e9693c91',
    pin: 'liIiB',
    title: 'Angular Multi-State Animations | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-route-animations': {
    id: 'd30153ee-a834-47e5-b283-a6131bece06b',
    pin: '5PWvs',
    title: 'Route Animations in Angular | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-seq-parallel-animations': {
    id: '8e752efa-fdae-4179-85c9-ceb4de49dc0d',
    pin: 'GLZ00',
    title:
      'Angular sequential VS parallel animations | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-async-pipe': {
    id: 'bfb6dc26-dfdc-46f4-81a0-14e6f8a8cad7',
    pin: '_XgRU',
    title:
      "Angular's Async Pipe to unsubscribe streams automagically | Angular Cookbook 2nd Ed. Recipe",
  },
  'rx-custom-operator': {
    id: '1e075deb-bd70-4e1f-8dd1-a3de4f569d8a',
    pin: 'KFUbp',
    title: 'RxJS Custom Operator | Angular Cookbook 2nd Ed. Recipe',
  },
  'rx-map-operator': {
    id: '0bfaf577-d705-4278-8343-363d98d750e0',
    pin: 'RXWqV',
    title:
      "Using RxJS 'map' operator to transform data | Angular Cookbook 2nd Ed. Recipe",
  },
  'rx-multiple-streams': {
    id: 'b5ddcb69-dad9-497c-ac2f-3357f527ffa2',
    pin: '6FjXS',
    title:
      'Listening to multiple observable streams | Angular Cookbook 2nd Ed. Recipe',
  },
  'rx-retry-http-calls': {
    id: 'e86f7e58-8614-48f3-ae07-6db302350755',
    pin: 'kIIwN',
    title:
      'Retry failed HTTP calls with RxJS | Angular Cookbook 2nd Ed. Recipe',
  },
  'rx-seq-parallel-http': {
    id: '70745743-ed13-465c-a078-d84e3f0df298',
    pin: 'KDr92',
    title:
      'Sequential and Parallel http calls in Angular with RxJS | Angular Cookbook 2nd Ed. Recipe',
  },
  'rx-switchmap-operator': {
    id: 'ccea7fb6-dff7-42bc-ad53-86209f5bf96c',
    pin: 'bhMM_',
    title:
      'RxJS switchMap & debounce operators with autocompletes | Angular Cookbook 2nd Ed. Recipe',
  },
  'rx-unsubscribing-streams': {
    id: '27f1c45b-cf37-4b4c-b1d5-785c72fbfbaf',
    pin: 'CXzl3',
    title:
      'Unsubscribing streams to avoid memory leaks | Angular Cookbook 2nd Ed. Recipe',
  },
  'ngrx-actions-reducer': {
    id: '592dd0c2-72ef-4725-9202-9b8aae3b7629',
    pin: 'b_k1F',
    title:
      'Creating NgRx store with actions & reducer | Angular Cookbook 2nd Ed. Recipe',
  },
  'ngrx-component-store': {
    id: 'a126ebe2-992b-4941-ac8e-8b066a0c8621',
    pin: 'ww4OR',
    title:
      'Using NgRx Component Store to manage state for a component | Angular Cookbook 2nd Ed. Recipe',
  },
  'ngrx-devtools': {
    id: '38746d2c-2081-4470-b13b-d8a7eb6e0e25',
    pin: 'L57Di',
    title:
      'Using NgRx Devtools to debug state | Angular Cookbook 2nd Ed. Recipe',
  },
  'ngrx-effects': {
    id: 'd63f8f03-1d9d-418e-9be5-c66f25739132',
    pin: 'CePYc',
    title:
      'Using NgRx effects to fetch data from API calls | Angular Cookbook 2nd Ed. Recipe',
  },
  'ngrx-selectors': {
    id: '4613c321-f676-4ee1-8730-53547d98d111',
    pin: 'VqQov',
    title:
      'NgRx selectors to select and render state in components | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-basic-routing': {
    id: '6da0656e-11cc-411d-9cef-95466ecab7c5',
    pin: 'NUXMX',
    title:
      'Creating routes in an Angular app | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-global-loader': {
    id: 'ce234ad2-3240-4db8-b4e1-8589c8eaa195',
    pin: '7nWxd',
    title: 'Global Loader for Angular Routes | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-lazy-routing': {
    id: '1eda8ec8-cfd9-4fd1-a14a-df1f61415144',
    pin: 'Akrgj',
    title:
      'Creating routes in an Angular app | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-route-guards': {
    id: 'cac0fa62-ec3a-419f-a043-8a77aba4ee04',
    pin: 'PZ4xp',
    title: 'Angular Route Guards | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-route-params': {
    id: 'acc2b630-da3c-4414-95f3-f0a9341b8e6a',
    pin: 'EPvx_',
    title:
      'Working with Angular Route Params | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-route-preload-strat': {
    id: '047bf06f-9c7a-41bf-a8e2-54c2b41133ee',
    pin: 'bjwfd',
    title:
      'Angular Route Preloading Strategies | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-form-arrays': {
    id: 'a78d3ee4-d48f-41b4-a4be-85aa51d94de1',
    pin: 'xG6lU',
    title: 'Complex forms with Form Arrays | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-form-cva': {
    id: '63a888c9-5271-4831-b910-d698e37589b6',
    pin: 'vcOcf',
    title:
      'Writing your own custom form control using ControlValueAccessor | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-reactive-forms': {
    id: 'da604612-9a37-44cb-80e9-440c914d23b6',
    pin: 'g6VCX',
    title: 'Angular Reactive Forms | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-rf-async-validator': {
    id: 'c627f434-2549-47bf-bcc2-dbc4db9b2690',
    pin: 'TYsXg',
    title:
      'Server side validation using asynchronous validator functions | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-tdf': {
    id: '2a0aa53c-d1bb-4329-b154-ff2c6b86ebbe',
    pin: 'Gzjhy',
    title: 'Angular Template Driven Forms | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-testing-forms': {
    id: 'd4202bf7-f335-46d5-9563-97b8c891259f',
    pin: 'iS9tS',
    title: 'Testing forms in Angular | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-cdk-coercion': {
    id: '32313449-fba6-4eb3-86d4-6f6a435a5fbf',
    pin: 'n_u3-',
    title:
      'Input coercion utilities from Angular CDK | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-cdk-drag-drop': {
    id: '36ad8c5b-f41e-4dd4-a77c-81d74e7e3bcc',
    pin: 'XcyyN',
    title:
      'Using CDK Drag and Drop to move items from one list to another | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-cdk-listbox': {
    id: '41d0c456-1cfc-4af9-84fd-278c004273ec',
    pin: 'dCo4R',
    title:
      'Accessible Listbox interactions using CDK Listbox directives | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-cdk-lkm': {
    id: '5f438840-80ad-4a25-bf6e-f1a0636dc6a0',
    pin: 'VffmY',
    title:
      'Using Angular ListKeyManager for keyboard navigation | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-cdk-menu': {
    id: '67fd1275-f319-464d-8e99-dd1c2e0b481e',
    pin: 'zvtwR',
    title:
      'Working with nested menus using Angular CDK Menu API | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-cdk-popover': {
    id: '510ad685-6632-4acf-8133-17d48f572188',
    pin: 'fbbOf',
    title:
      'Pointy little popovers with Angular CDK | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-cdk-stepper': {
    id: '44f708a6-e861-4d4c-9790-09ced770810f',
    pin: 'xyuKm',
    title:
      'Creating a multi-step from with CDK Stepper API | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-cdk-virtual-scroll': {
    id: '3026e908-fe0e-45d4-9151-4e258acb5512',
    pin: 'yvYvQ',
    title: 'Angular CDK Virtual Scroll | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-jest-global-mocks': {
    id: 'b5f162b6-f048-45ff-ad89-adb2f96f7883',
    pin: 'LtBDi',
    title: 'Providing global mocks for Jest | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-jest-setup': {
    id: '45f308d8-3ebe-4696-b674-bc1c234fb9ce',
    pin: 'vm0rR',
    title:
      'Setting up unit tests in Angular with Jest | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-test-cdk-harness': {
    id: 'e6b7519e-33a8-4bf1-9eba-d60805d90204',
    pin: 'spKKI',
    title:
      'Writing even easier tests with Angular CDK component harnesses | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-test-http-resp': {
    id: '75369a8b-b3ae-4f4a-8264-aaba37a516f8',
    pin: 'JCFoc',
    title:
      'Unit Testing responses from HTTP calls | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-test-ng-mocks': {
    id: '9f0f3223-8814-4dca-83df-90f6d3670c0b',
    pin: 'L-NQl',
    title:
      'Mocking child components and directives using ng-mocks package | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-test-pipes': {
    id: 'd11500ce-9cbe-43aa-a0e7-5d609ced53db',
    pin: 'pVN1x',
    title: 'Unit testing Angular Pipes | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-test-services': {
    id: 'a2283ab1-cc8d-49fe-9f6a-740c5ceb1b84',
    pin: 'pVir_',
    title:
      'Using spies on an injected service in a unit test | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-test-services-stubs': {
    id: '60af246a-3bb7-4f0e-bc41-918544d9dd5e',
    pin: 'ECvXd',
    title:
      'Mocking Angular services using stubs | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-cy-bun-pack': {
    id: 'c633b8cb-0915-41c7-9136-99ffd90f976a',
    pin: 'GMP4i',
    title: 'Using Cypress bundled packages | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-cy-element-visibility': {
    id: '24f088a9-e9ba-44c9-822b-be9574bae972',
    pin: 'btEj-',
    title:
      'Validating if a DOM element is visible on the view\n   | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-cy-forms': {
    id: 'fec18906-11e0-4892-af7d-267c444140af',
    pin: '5up-x',
    title:
      'Testing form inputs and submission in Cypress | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-cy-http-requests': {
    id: 'a0b7e5e4-234b-4075-9783-645ff0f18eaa',
    pin: 'GHCwL',
    title:
      'Waiting for http requests in Cypress | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-cy-mock-data': {
    id: '9a679f9b-dfbf-4ec7-b491-aee4b7442873',
    pin: 'qMUFU',
    title:
      'Using cypress fixtures to provide mock data | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-cypress-starter': {
    id: '95276f45-0bf1-4d35-b818-0777efb1639f',
    pin: 'uWWMR',
    title:
      'Your first Cypress test in Angular | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-cd-ref': {
    id: 'f1fb8137-1eb0-40bd-97c7-01ff2da4657d',
    pin: 'dp8Qb',
    title:
      'Detaching the change detector from components | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-for-trackby': {
    id: '00e015a8-ddb6-4fe8-9a40-15e10ca94619',
    pin: 'O3G6H',
    title:
      'Using trackBy for lists with *ngFor | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-on-push-strategy': {
    id: '219edc52-b0cf-4814-8d89-7a70ce95f858',
    pin: 'yDsdo',
    title:
      'Using OnPush change detection to prune component subtrees | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-perf-budgets': {
    id: '1fe41e8d-c003-4190-81c9-abb5660e3935',
    pin: 'sLn7X',
    title:
      'Using performance budgets for auditing in Angular | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-perf-deferred': {
    id: '97188bd8-3ffe-4c68-9108-174fdd097ea7',
    pin: 'xA1lk',
    title:
      'Optimizing performance using @defer blocks | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-perf-wba': {
    id: '55b07861-9dd4-4788-bace-a295db3dd490',
    pin: '5euXP',
    title:
      'Analyzing bundles with webpack-bundle-analyzer | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-pipes-perf': {
    id: 'c69db848-0bec-49ea-91ff-3c2338a9edc7',
    pin: 'fQtzo',
    title:
      'Moving heavy computation to pure pipes in Angular | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-run-outside-angular': {
    id: 'ec058990-968e-4d79-9aa8-d412a1f20a58',
    pin: 'jOllS',
    title:
      'Running async events outside Angular with NgZone | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-ww-perf': {
    id: '25773adb-e401-4623-be92-5e6d8a276018',
    pin: 'iihlI',
    title:
      'Using web workers for heavy computation in Angular | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-pwa-app-shell': {
    id: '1c444b62-bc32-443c-846e-9a32cec9a2d8',
    pin: 'JENQS',
    title:
      'Creating an App Shell for your Angular PWA | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-pwa-conversion': {
    id: '9be75710-a9c5-48e4-ae19-dbf42f5edd64',
    pin: 'PuIdO',
    title:
      'Converting an existing Angular app into a PWA with the Angular CLI | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-pwa-cust-installation': {
    id: '3755aef8-6880-48db-b5d3-0908b7a73daa',
    pin: '7QP_I',
    title:
      'Providing a custom installable experience in your Angular PWA | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-pwa-dark-mode': {
    id: '8332de0a-7dd0-4033-8782-7e6d470a0213',
    pin: '2TRLq',
    title:
      'Using Dark Mode in your Angular PWA | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-pwa-precaching': {
    id: '556765c7-b8cb-4fa0-b3b6-a63100de8731',
    pin: 'uMD_N',
    title:
      'Precaching requests using an Angular service worker | Angular Cookbook 2nd Ed. Recipe',
  },
  'ng-pwa-theme-color': {
    id: '1781331e-ae79-4ebc-8408-5096b3205d50',
    pin: 'GxOZh',
    title:
      'Modifying the theme color for your PWA | Angular Cookbook 2nd Ed. Recipe',
  },
};

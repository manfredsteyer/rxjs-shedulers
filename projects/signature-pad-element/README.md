# Test web component

1. `npm run build:element`
2. merge content into `app.element.js` in root
3. optionally run `npm run gzip:element`

# Setup steps
1. ng add @angular/elements

2. ng generate application my-element
In App component

3. change app.component to 

```typescript
@Component({
  selector: 'app-element',
  template: `<h1>I'm a webcomponent</h1>`,
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {

}
```

4. change app.module.ts to:

```typescript
@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const appElement = createCustomElement(AppComponent, {injector});
    customElements.define('app-element', appElement);
  }
  ngDoBootstrap() { }
}
```

6. add polifill to polifill.ts of my-element
import './build/document-register-element.js';

7. ng build --project=my-element --prod --output-hashing=none

8. merge code into one file 

9. create index.html

10. serve it => http-server

# What is this library?

This is micro Angular v4+ contenteditable directive for compatibility with Angular forms.
It just implements [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) for this purpose.

# Install

You can just copy and paste this [directive](src/index.ts) or install it from npm:

```bash
npm install ng-contenteditable --save
```

# Usage

Import and add `ContenteditableDirective` to your module:

```ts
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContenteditableDirective } from 'ng-contenteditable';

// ...

@NgModule({
  declarations: [
    ContenteditableDirective
  ],
  imports: [
    // Import one or both of this modules
    FormsModule,
    ReactiveFormsModule
  ]

// ...

})
```

And then you can to use it in [template-driven forms](https://angular.io/guide/forms) like this:

```html
<form #testForm="ngForm">
  <p
    contenteditable="true"
    name="myFormName"
    [(ngModel)]="'This is contenteditable text for template form'"
    ></p>
</form>

<pre>
  {{ testForm.value | json }}
</pre>
```

You can also use [reactive forms](https://angular.io/guide/reactive-forms) like this:

```ts
// In your component
import { FormControl } from '@angular/forms';

export class MyComponent {
  myControl = new FormControl;

  ngOnInit()
  {
    this.myControl.setValue(`This is contenteditable text for reactive form`);
  }
}
```

```html
<p contenteditable="true" [formControl]="myControl"></p>

<pre>
  {{ myControl.value | json }}
</pre>
```

# Options

With `contenteditable` directive you can pass optional `@Input` value for `propValueAccesor`:

```html
<p
  contenteditable="true"
  propValueAccesor="innerHTML"
  [formControl]="myControl"
  ></p>
```

In `ContenteditableDirective` this value use like this:

```ts
this.elementRef.nativeElement[this.propValueAccesor]
```

By default it using `textContent`.

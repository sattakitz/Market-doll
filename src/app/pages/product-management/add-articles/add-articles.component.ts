import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-articles',
  templateUrl: './add-articles.component.html',
  styleUrls: ['./add-articles.component.scss']
})
export class AddArticlesComponent implements OnInit {
  public Editor = ClassicEditor;
  form: FormGroup = this.createFormGroup;
  public editorData = '<p[config]></p>';

  constructor(
    private ngFb: FormBuilder,
  ) { }

  ngOnInit() {

  }

  get createFormGroup() {
    return this.ngFb.group({
      editor: [''],
      ArticleTitle: [''],
    });
  }

  public onReady(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }

  editorChange({ editor }: ChangeEvent) {
    const data = editor.getData();

    this.form.patchValue({ editor: data });
  }

  onSubmit() {
    console.log(this.form.value);

  }
}

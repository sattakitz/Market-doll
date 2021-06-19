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

  public editorData = '<p></p>';

  form: FormGroup = this.createFormGroup;
  formSEO: FormGroup = this.createFormGroupSeo;

  viewall = 0;

  imageUp: any;
  imageEmpty: any;
  message!: string;
  imagePath: any;

  constructor(
    private ngFb: FormBuilder,
  ) { }

  ngOnInit() {

  }

  get createFormGroupSeo() {
    return this.ngFb.group({
      TitleSEO: [''],
      DescriptionSEO: [''],
      url: [''],
      Keywords: [''],
    })
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
    console.log(this.formSEO.value);
  }

  onFileChanged(event) {
    const files = event.target.files;
    if (files.length === 0)
      return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imageUp = reader.result;
    }

  }
  onFileRemoved(imageEmpty) {
    imageEmpty = 0;
  }

}

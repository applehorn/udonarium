import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { FileArchiver } from '@udonarium/core/file-storage/file-archiver';
import { ImageFile } from '@udonarium/core/file-storage/image-file';
import { ImageStorage } from '@udonarium/core/file-storage/image-storage';
import { ImageTagList } from '@udonarium/image-tag-list';
import { EventSystem, Network } from '@udonarium/core/system';

import { PanelService } from 'service/panel.service';

@Component({
  selector: 'file-storage',
  templateUrl: './file-storage.component.html',
  styleUrls: ['./file-storage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileStorageComponent implements OnInit, OnDestroy, AfterViewInit {
  searchWord:string = 'default';
  selectedImageTag:string = '';
  isTagTextBoxChanged:boolean = false;

  fileStorageService = ImageStorage.instance;
  constructor(
    private changeDetector: ChangeDetectorRef,
    private panelService: PanelService
  ) { }

  ngOnInit() {
    this.panelService.title = 'ファイル一覧';
  }

  ngAfterViewInit() {
    EventSystem.register(this).on('SYNCHRONIZE_FILE_LIST', event => {
      if (event.isSendFromSelf) {
        this.changeDetector.markForCheck();
      }
    });
  }

  ngOnDestroy() {
    EventSystem.unregister(this);
  }

  handleFileSelect(event: Event) {
    let files = (<HTMLInputElement>event.target).files;
    if (files.length) FileArchiver.instance.load(files);
  }

  onSelectedFile(file: ImageFile) {
    console.log('onSelectedFile', file);
    EventSystem.call('SELECT_FILE', { fileIdentifier: file.identifier }, Network.peerId);

    this.selectedImageTag = ImageTagList.instance.getTagFromIdentifier(file.identifier).tag;
  }

  searchImageFromTag() {
    console.log('検索ボタン押下/検索ワード：' + this.searchWord );
  }

  changeTag() {
    console.log('変更ボタン押下/変更後タグ：' + this.selectedImageTag );
  }

  changeTagTextBox() {
    this.isTagTextBoxChanged = true;
  }
}

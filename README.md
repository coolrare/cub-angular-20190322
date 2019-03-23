# cub-angular-20190322

## 線上起始專案

- [入門課程起始專案](https://stackblitz.com/edit/cub-angular-20190322)
- [實作課程起始專案](https://stackblitz.com/edit/cub-angular-20190323)
- [實作課程完整的程式碼及過程](https://github.com/wellwind/angular-realworld-basic)

## 熱鍵表

- 下載 PDF 檔
    - [Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
    - [Mac](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
    - [Linux](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)

- 全部儲存：
    - [Win] ctrl + k, s
    - [Mac] cmd + option + s

- 切換關聯檔案
    - [Win] alt + o
    - [Mac] option + shift + o

- 快速開啟檔案
    - [Win] ctrl + p
    - [Mac] cmd + p

- 開啟/關閉左邊的 siderbar
    - [Win] ctrl + b
    - [Mac] cmd + b

- 開啟/關閉檔案總管
    - [Win] ctrl + shift + e
    - [Mac] cmd + shift + e

- 開啟/關閉搜尋視窗
    - [Win] ctrl + shift + f
    - [Mac] cmd + shift + f

- 開啟/關閉原始檔控制(git)
    - [Win/Mac] ctrl + shift + g

- 自動排版
    - [Win/Mac] alt + shift + f (記得設定 prettier.singleQuote)

- 註解
    - [Win] ctrl + k + c
    - [Mac] cmd + k + c

- 取消註解
    - [Win] ctrl + k + u
    - [Mac] cmd + k + u

- 單行註解
    - [Win] ctrl + /
    - [Mac] cmd + /

## Emmet

https://docs.emmet.io/abbreviations/syntax/

## Input 資料流

![Input 資料流](images/input-flow.jpg)

## Output 資料流

![Output 資料流](images/output-flow.jpg)

## 使用 Chrome 偵錯

1. 打開 `F12`
2. `Source` 頁籤
3. `ctrl + p` 搜尋 ts 檔
4. 加入中斷點

## 使用 VSCode 偵錯

1. 建立 `.vscode/launch.json`

```json
{
  // 使用 IntelliSense 以得知可用的屬性。
  // 暫留以檢視現有屬性的描述。
  // 如需詳細資訊，請瀏覽: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [{
    "type": "chrome",
    "request": "launch",
    "name": "Angular Debug",
    "url": "http://localhost:4200",
    "webRoot": "${workspaceRoot}/src",
    "sourceMapPathOverrides": {
      "webpack:///./src/*": "${webRoot}/*"
    }
  }]
}
```

2. 使用 `F5` 開始偵錯

## 相依注入

- [Dependenct Injection](https://angular.tw/guide/dependency-injection)
- [在 @NgModule 的 providers: [] 自由更換注入內容 (1)](https://wellwind.idv.tw/blog/2018/11/04/mastering-angular-20-ngmodule-providers/)
- [在 @NgModule 的 providers: [] 自由更換注入內容 (2)](https://wellwind.idv.tw/blog/2018/11/05/mastering-angular-21-ngmodule-providers-2/)
- [各種在程式中取的注入 token 實體的方法](https://wellwind.idv.tw/blog/2018/11/06/mastering-angular-22-get-injection-tokens/)
- [認識 InjectionToken](https://wellwind.idv.tw/blog/2018/11/07/mastering-angular-23-injection-tokens/)

## SEO

- [Angular Universal 伺服器渲染](https://angular.tw/guide/universal)
- [Meta service](https://angular.tw/api/platform-browser/Meta)
- [Title service](https://angular.tw/api/platform-browser/Title)

## 路由

- https://angular.tw/guide/router
# React 19 + React Router v7 + i18next 多語系示範

這是一個使用 Vite、React 19、React Router v7 和 i18next 建立的多語系應用程式。

## 功能特色

- ✅ React 19
- ✅ React Router v7 (包含動態路由)
- ✅ i18next 多語系支援
- ✅ 支援 7 種語言：
  - 🇺🇸 English (en)
  - 🇹🇼 繁體中文 (zh-TW) - 預設語言
  - 🇨🇳 简体中文 (zh)
  - 🇯🇵 日本語 (ja)
  - 🇹🇭 ไทย (th)
  - 🇻🇳 Tiếng Việt (vi)
  - 🇰🇷 한국어 (ko)
- ✅ 完整的測試覆蓋 (Vitest + React Testing Library)
- ✅ SEO 優化 (react-helmet-async, meta tags, canonical URLs)
- ✅ 結構化資料 (JSON-LD for FAQ)
- ✅ 8 個測試頁面展示不同功能

## 專案結構

```
src/
├── component/          # 可重用元件
│   ├── LanguageSwitcher.jsx  # 語言切換器
│   └── Navigation.jsx         # 導航列
├── route/             # 路由頁面
│   ├── Home.jsx       # 首頁 (計數器示範)
│   ├── About.jsx      # 關於頁面
│   ├── Contact.jsx    # 聯絡頁面
│   ├── Products.jsx   # 產品頁面
│   ├── Services.jsx   # 服務頁面 (Grid 佈局)
│   ├── Blog.jsx       # 部落格列表
│   ├── BlogPost.jsx   # 部落格文章 (動態路由)
│   └── FAQ.jsx        # 常見問題 (含結構化資料)
├── i18n/              # 多語系配置
│   ├── config.js      # 語言配置
│   ├── index.js       # i18next 初始化
│   └── locales/       # 翻譯檔案 (7 種語言)
│       ├── en.json
│       ├── zh-TW.json
│       ├── zh.json
│       ├── ja.json
│       ├── th.json
│       ├── vi.json
│       └── ko.json
└── test/              # 測試檔案
    ├── setup.js
    ├── i18n.test.js
    ├── Home.test.jsx
    └── LanguageSwitcher.test.jsx
```

## 安裝與執行

### 安裝依賴

```bash
pnpm install
```

### 開發模式

```bash
pnpm dev
```

### 執行測試

```bash
# 執行所有測試
pnpm test

# 執行測試並產生報告
pnpm test:run

# 執行測試 UI
pnpm test:ui
```

### 建置

```bash
pnpm build
```

### 預覽建置結果

```bash
pnpm preview
```

## 測試說明

專案包含完整的測試：

1. **i18n 配置測試** (`src/test/i18n.test.js`)
   - 驗證預設語言為 zh-TW
   - 驗證支援 7 種語言
   - 驗證所有語言都有完整的翻譯
   - 驗證插值功能
   - 驗證語言切換功能

2. **LanguageSwitcher 測試** (`src/test/LanguageSwitcher.test.jsx`)
   - 驗證所有語言按鈕渲染
   - 驗證當前語言顯示
   - 驗證語言切換功能

3. **Home 頁面測試** (`src/test/Home.test.jsx`)
   - 驗證頁面渲染
   - 驗證計數器功能
   - 驗證多語系顯示

## 多語系使用方式

### 在元件中使用翻譯

```jsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('common.welcome')}</h1>
      <p>{t('home.counter', { count: 5 })}</p>
    </div>
  );
}
```

### 切換語言

```jsx
import { useTranslation } from 'react-i18next';

function LanguageButton() {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  
  return (
    <button onClick={() => changeLanguage('en')}>
      Switch to English
    </button>
  );
}
```

## 頁面功能展示

### 1. 首頁 (/)
- 計數器功能示範
- React state 管理
- 多語系插值

### 2. 關於 (/about)
- 基本頁面結構
- SEO meta 標籤

### 3. 產品 (/products)
- 產品列表展示
- 結構化內容

### 4. 服務 (/services)
- Grid 佈局
- 卡片式設計
- 圖示展示

### 5. 部落格 (/blog)
- 文章列表
- 連結到詳細頁面
- 文章摘要

### 6. 部落格文章 (/blog/:id)
- 動態路由示範
- URL 參數處理
- 404 處理

### 7. 常見問題 (/faq)
- 手風琴式 UI
- JSON-LD 結構化資料
- 互動式元件

### 8. 聯絡 (/contact)
- 聯絡資訊頁面

## 技術棧

- **框架**: React 19
- **建置工具**: Vite 7
- **路由**: React Router v7 (含動態路由)
- **多語系**: i18next + react-i18next
- **SEO**: react-helmet-async
- **測試**: Vitest + React Testing Library
- **套件管理**: pnpm

## SEO 優化

本專案實作了完整的 SEO 最佳實踐：

- ✅ 每個頁面都有獨特的 title 和 meta description
- ✅ Canonical URLs
- ✅ Open Graph 標籤 (社群媒體分享優化)
- ✅ JSON-LD 結構化資料 (FAQ 頁面)
- ✅ 語意化 HTML 標籤
- ✅ 多語系 SEO 策略

詳細說明請參考 [SEO_GUIDE.md](./SEO_GUIDE.md)

## 相關文件

- [README.md](./README.md) - 專案說明 (本檔案)
- [TEST_GUIDE.md](./TEST_GUIDE.md) - 測試指南
- [QUICK_START.md](./QUICK_START.md) - 快速開始
- [SEO_GUIDE.md](./SEO_GUIDE.md) - SEO 優化指南

## License

MIT

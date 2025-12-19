import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import LanguageSwitcher from '../component/LanguageSwitcher';

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    i18n.changeLanguage('zh-TW');
  });

  it('應該渲染所有語言按鈕', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSwitcher />
      </I18nextProvider>
    );

    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('繁體中文')).toBeInTheDocument();
    expect(screen.getByText('简体中文')).toBeInTheDocument();
    expect(screen.getByText('日本語')).toBeInTheDocument();
    expect(screen.getByText('ไทย')).toBeInTheDocument();
    expect(screen.getByText('Tiếng Việt')).toBeInTheDocument();
    expect(screen.getByText('한국어')).toBeInTheDocument();
  });

  it('應該顯示當前語言', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSwitcher />
      </I18nextProvider>
    );

    expect(screen.getByText(/當前語言/)).toBeInTheDocument();
    // 使用更精確的查詢來避免匹配到按鈕
    expect(screen.getByText(/當前語言: 繁體中文/)).toBeInTheDocument();
  });

  it('應該能切換語言', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSwitcher />
      </I18nextProvider>
    );

    const englishButton = screen.getByText('English');
    fireEvent.click(englishButton);

    // Wait for language change
    await new Promise(resolve => setTimeout(resolve, 100));

    expect(i18n.language).toBe('en');
  });

  it('應該能切換到所有支援的語言', async () => {
    const languages = ['en', 'zh-TW', 'zh', 'ja', 'th', 'vi', 'ko'];
    const languageNames = {
      'en': 'English',
      'zh-TW': '繁體中文',
      'zh': '简体中文',
      'ja': '日本語',
      'th': 'ไทย',
      'vi': 'Tiếng Việt',
      'ko': '한국어',
    };

    for (const lang of languages) {
      const { unmount } = render(
        <I18nextProvider i18n={i18n}>
          <LanguageSwitcher />
        </I18nextProvider>
      );

      const button = screen.getByText(languageNames[lang]);
      fireEvent.click(button);

      await new Promise(resolve => setTimeout(resolve, 100));

      expect(i18n.language).toBe(lang);
      unmount();
    }
  });
});


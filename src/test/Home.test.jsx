import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import Home from '../route/Home';

describe('Home', () => {
  beforeEach(() => {
    i18n.changeLanguage('zh-TW');
  });

  it('應該渲染首頁標題', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Home />
      </I18nextProvider>
    );

    expect(screen.getByText('首頁')).toBeInTheDocument();
  });

  it('應該顯示計數器按鈕', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Home />
      </I18nextProvider>
    );

    expect(screen.getByText(/計數為 0/)).toBeInTheDocument();
  });

  it('點擊按鈕應該增加計數', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Home />
      </I18nextProvider>
    );

    const button = screen.getByText(/計數為 0/);
    fireEvent.click(button);

    expect(screen.getByText(/計數為 1/)).toBeInTheDocument();
  });

  it('應該根據語言顯示不同內容', async () => {
    const { rerender } = render(
      <I18nextProvider i18n={i18n}>
        <Home />
      </I18nextProvider>
    );

    expect(screen.getByText('首頁')).toBeInTheDocument();

    // Change to English
    await i18n.changeLanguage('en');
    
    rerender(
      <I18nextProvider i18n={i18n}>
        <Home />
      </I18nextProvider>
    );

    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });
});


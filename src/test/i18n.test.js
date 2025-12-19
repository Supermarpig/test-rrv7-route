import { describe, it, expect, beforeEach } from 'vitest';
import i18n from '../i18n';
import { DEFAULT_LANGUAGE, PREFERRED_LOCALES } from '../i18n/config';

describe('i18n 配置', () => {
  beforeEach(() => {
    i18n.changeLanguage(DEFAULT_LANGUAGE);
  });

  it('預設語言應該是 zh-TW', () => {
    expect(DEFAULT_LANGUAGE).toBe('zh-TW');
  });

  it('應該支援 7 種語言', () => {
    expect(PREFERRED_LOCALES).toHaveLength(7);
    expect(PREFERRED_LOCALES).toEqual(['en', 'zh-TW', 'zh', 'ja', 'th', 'vi', 'ko']);
  });

  it('應該能載入所有語言的翻譯', () => {
    PREFERRED_LOCALES.forEach(lang => {
      expect(i18n.hasResourceBundle(lang, 'translation')).toBe(true);
    });
  });

  it('應該能切換到每一種語言', async () => {
    for (const lang of PREFERRED_LOCALES) {
      await i18n.changeLanguage(lang);
      expect(i18n.language).toBe(lang);
    }
  });

  it('每種語言都應該有 common.welcome 翻譯', () => {
    PREFERRED_LOCALES.forEach(lang => {
      const translation = i18n.getResourceBundle(lang, 'translation');
      expect(translation.common.welcome).toBeDefined();
    });
  });

  it('每種語言都應該有完整的翻譯結構', () => {
    const requiredKeys = [
      'common.welcome',
      'common.changeLanguage',
      'common.currentLanguage',
      'common.home',
      'common.about',
      'common.contact',
      'home.title',
      'home.description',
      'home.counter',
      'home.clickButton',
      'about.title',
      'about.description',
      'contact.title',
      'contact.description',
    ];

    PREFERRED_LOCALES.forEach(lang => {
      i18n.changeLanguage(lang);
      requiredKeys.forEach(key => {
        const translation = i18n.t(key);
        expect(translation).toBeDefined();
        expect(translation).not.toBe(key); // 確保不是回傳 key 本身
      });
    });
  });

  it('應該正確處理插值', () => {
    i18n.changeLanguage('zh-TW');
    const translated = i18n.t('home.counter', { count: 5 });
    expect(translated).toBe('計數為 5');
  });

  it('不存在的語言應該回退到預設語言', async () => {
    await i18n.changeLanguage('invalid-lang');
    const translation = i18n.t('common.welcome');
    expect(translation).toBeDefined();
  });
});


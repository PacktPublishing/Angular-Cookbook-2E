import { Injectable, signal } from '@angular/core';

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

@Injectable({
  providedIn: 'root',
})
export class InstallablePromptService {
  installPromptEvent!: BeforeInstallPromptEvent;
  isPromptBannerShown = signal(false);
  constructor() {
    window.addEventListener(
      'beforeinstallprompt',
      this.handleInstallPrompt.bind(this)
    );
  }

  handleInstallPrompt(ev: BeforeInstallPromptEvent) {
    ev.preventDefault();
    this.installPromptEvent = ev;
    console.log('before install prompt event fired', ev);
    window.removeEventListener('beforeinstallprompt', this.handleInstallPrompt);
  }

  async showInstallPrompt() {
    if (!this.installPromptEvent) {
      return;
    }
    await this.installPromptEvent.prompt();
    const { outcome } = await this.installPromptEvent.userChoice;
    console.log('The choice of user is ', outcome);
    this.isPromptBannerShown.set(false);
  }
}

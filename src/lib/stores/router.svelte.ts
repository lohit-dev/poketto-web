class RouterStore {
  currentPath = $state<string>('/');

  init() {
    if (typeof window === 'undefined') return;
    this.updatePath();
    window.addEventListener('popstate', () => this.updatePath());
    window.addEventListener('hashchange', () => this.updatePath());
  }

  updatePath() {
    if (typeof window === 'undefined') return;
    const path = window.location.pathname;
    const hash = window.location.hash;
    if (path === '/privacy' || path.endsWith('/privacy.html') || hash === '#privacy') {
      this.currentPath = '/privacy';
    } else {
      this.currentPath = '/';
    }
  }

  navigate(to: string) {
    if (typeof window === 'undefined') return;
    if (window.location.pathname !== to) {
      window.history.pushState({}, '', to);
    }
    this.updatePath();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

export const router = new RouterStore();

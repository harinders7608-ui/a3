/* DecodeLearnUp &bull; Interactive Algorithmic Education Scripts */
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Drawer Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('active');
      const expanded = mobileDrawer.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', expanded);
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // FAQ Accordions
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (btn) {
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // Algorithmic Complexity & Big-O Latency Simulator
  const calcBtn = document.getElementById('calc-btn');
  if (calcBtn) {
    calcBtn.addEventListener('click', () => {
      const algoType = document.getElementById('calc-algorithm').value;
      const dataSize = document.getElementById('calc-size').value;
      const metricEl = document.getElementById('calc-result-metric');
      const captionEl = document.getElementById('calc-result-caption');

      let complexity = 'O(N log N) &bull; Linearithmic Divide & Conquer';
      let latency = '0.014 ms &bull; Optimal Cache Line Utilization &bull; Stable Sorting';

      if (algoType === 'dynamic' && dataSize === 'massive') {
        complexity = 'O(N &times; W) &bull; Pseudo-Polynomial Memoized State';
        latency = '1.82 ms &bull; Sub-Linear Working Memory Allocation';
      } else if (algoType === 'crypto' && dataSize === 'standard') {
        complexity = 'O(1) Constant Amortized &bull; SHA-256 Digest';
        latency = '0.003 ms &bull; Avalanche Cryptographic Dispersion';
      } else if (algoType === 'graph' && dataSize === 'complex') {
        complexity = 'O(V + E) &bull; Adjacency List Traversal';
        latency = '0.24 ms &bull; Breadth-First Topological Ordering';
      }

      if (metricEl) metricEl.innerHTML = complexity;
      if (captionEl) captionEl.innerHTML = latency;
    });
  }

  // Admissions Consultation Form
  const admissionsForm = document.getElementById('admissions-consultation-form');
  if (admissionsForm) {
    admissionsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const feedback = document.getElementById('form-feedback');
      if (feedback) {
        feedback.style.display = 'block';
        feedback.innerHTML = '<span style="color:var(--color-emerald);font-weight:700;">&#10003; Admissions Consultation Scheduled:</span> Our faculty coordinator will contact you within 24 hours to confirm your lab workstation session at 181 Mercer Street.';
        admissionsForm.reset();
      }
    });
  }
});

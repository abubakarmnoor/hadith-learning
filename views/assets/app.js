document.addEventListener('DOMContentLoaded', () => {
    const t = document.querySelector('.menu-toggle'),
        n = document.querySelector('.nav-links');
    if (t && n) t.addEventListener('click', () => {
        let o = n.classList.toggle('open');
        t.setAttribute('aria-expanded', String(o))
    });
    document.querySelectorAll('[data-filter]').forEach(i => {
        let target = document.querySelector(i.dataset.filter);
        if (!target) return;
        let cards = [...target.querySelectorAll('[data-search-item]')],
            empty = target.parentElement.querySelector('.empty');
        i.addEventListener('input', () => {
            let q = i.value.toLowerCase(),
                count = 0;
            cards.forEach(c => {
                let ok = c.innerText.toLowerCase().includes(q);
                c.style.display = ok ? '' : 'none';
                if (ok) count++
            });
            if (empty) empty.style.display = count ? 'none' : 'block'
        })
    });
    let q = document.querySelector('[data-quiz]');
    if (q) q.addEventListener('submit', e => {
        e.preventDefault();
        let a = q.querySelector('input[name=answer]:checked'),
            r = q.querySelector('[data-result]');
        r.className = 'notice' + (a && a.value === 'b' ? '' : ' error');
        r.textContent = !a ? 'Please choose an answer.' : a.value === 'b' ? 'Correct! Well done.' : 'Not quite. Review the lesson and try again.'
    });
    document.querySelectorAll('[data-demo-form]').forEach(f => f.addEventListener('submit', e => {
        e.preventDefault();
        let m = f.querySelector('[data-form-message]');
        if (m) m.textContent = 'Frontend demo only. Connect a backend to receive and store submissions.'
    }))
});
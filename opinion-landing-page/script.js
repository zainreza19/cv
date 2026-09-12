(function () {
  "use strict";

  // ---------- Mobile nav toggle ----------
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.style.display === "flex";
      nav.style.display = isOpen ? "none" : "flex";
      nav.style.flexDirection = "column";
      nav.style.position = "absolute";
      nav.style.top = "76px";
      nav.style.left = "0";
      nav.style.right = "0";
      nav.style.background = "#f8f4ec";
      nav.style.padding = "16px 24px";
      nav.style.borderBottom = "1px solid #e7e0d2";
      nav.style.gap = "16px";
    });
  }

  // ---------- Scroll reveal ----------
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("in-view");
    });
  }

  // ---------- "Join as Expert" pre-selects the Expert role ----------
  var expertLinks = document.querySelectorAll('[data-role="Expert"]');
  var expertRadio = document.getElementById("role-expert");
  var expertiseField = document.getElementById("expertiseField");

  function setRole(value) {
    var radio = document.querySelector('input[name="role"][value="' + value + '"]');
    if (radio) {
      radio.checked = true;
      toggleExpertiseField();
    }
  }

  expertLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      setRole("Expert");
    });
  });

  function toggleExpertiseField() {
    var selected = document.querySelector('input[name="role"]:checked');
    if (expertiseField) {
      expertiseField.style.display = selected && selected.value === "Expert" ? "block" : "none";
    }
  }

  var roleGroup = document.getElementById("roleGroup");
  if (roleGroup) {
    roleGroup.addEventListener("change", toggleExpertiseField);
  }
  toggleExpertiseField();

  // ---------- Waitlist form submission ----------
  var form = document.getElementById("waitlistForm");
  var formWrap = document.getElementById("waitlistFormWrap");
  var successPanel = document.getElementById("formSuccess");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("email").value.trim();

      if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        form.reportValidity();
        return;
      }

      // NOTE: No backend is wired up yet. Submissions are stored locally
      // in the browser so the flow can be demoed end to end. Replace this
      // block with a real API call (or a service like Formspree / Airtable)
      // once a waitlist backend exists.
      try {
        var entry = {
          name: name,
          email: email,
          role: (document.querySelector('input[name="role"]:checked') || {}).value || "Individual",
          usecase: document.getElementById("usecase").value.trim(),
          expertise: document.getElementById("expertise") ? document.getElementById("expertise").value.trim() : "",
          submittedAt: new Date().toISOString()
        };
        var existing = JSON.parse(localStorage.getItem("opinion_waitlist") || "[]");
        existing.push(entry);
        localStorage.setItem("opinion_waitlist", JSON.stringify(existing));
      } catch (err) {
        // localStorage may be unavailable (private browsing, etc.) — fail silently.
      }

      if (formWrap) {
        formWrap.classList.add("submitted");
      }
      if (successPanel) {
        successPanel.classList.add("show");
      }
    });
  }
})();

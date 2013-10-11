/* =============================================================================
    Contents
    ----------------------------------------------------------------------------
    1) Responsive navigation assist

============================================================================= */

// 1) Responsive navigation assist
[].forEach.call(document.querySelectorAll(".menu-trigger"), function(el) {
    el.addEventListener("click", function() {
        this.classList.toggle("active");
    });
});


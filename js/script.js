// $('#open-m-email').on('click', function(e) {
//     e.preventDefault();
//     $('.bg-modal').toggleClass('is-visible');
//     $('#modal-email').toggleClass('is-visible');
// });
// $('#open-m-sms').on('click', function(e) {
//     e.preventDefault();
//     $('.bg-modal').toggleClass('is-visible');
//     $('#modal-sms').toggleClass('is-visible');
// });
// $('#open-m-call').on('click', function(e) {
//     e.preventDefault();
//     $('.bg-modal').toggleClass('is-visible');
//     $('#modal-call').toggleClass('is-visible');
// });

// Quick & dirty toggle to demonstrate modal toggle behavior
$('.modal-toggle').on('click', function(e) {
    e.preventDefault();
    $('.modal').toggleClass('is-visible');
});

window.addEventListener('load', function () {
    var image = document.getElementById('random-image');
    var images = [
        '/dogpic/dogcursed.jpg',
        '/dogpic/beagle.jpg',
        '/dogpic/corgi.jpg',
        '/dogpic/dogexcited.jpg',
        '/dogpic/doghad.jpg',
        '/dogpic/dogreverse.jpg',
        '/dogpic/dogteeth.jpg',
        '/dogpic/pug.jpg',
    ];

    var randomIndex = Math.floor(Math.random() * images.length);
    var randomImage = images[randomIndex];
    image.src = randomImage;

    var sounds = [
        '/dogsound/dog_barking-6296.mp3',
        '/dogsound/dog-barking-34671.mp3',
    ];

    var randomSoundIndex = Math.floor(Math.random() * sounds.length);
    var randomSound = sounds[randomSoundIndex];
    var sound = new Audio(randomSound);
    sound.play();
});

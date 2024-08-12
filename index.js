
    function submit() {
        const inputLink = document.getElementById("input-link").value;
        if (isValidURL(inputLink)) {
            // Fetch available video qualities for the provided URL
            fetchVideoQualities(inputLink);
        } else {
            alert("Invalid URL. Please enter a valid YouTube or Instagram link.");
        }
    }

    function isValidURL(url) {
        // Regular expression for validating YouTube or Instagram URLs
        const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)/;
        const instagramRegex = /^(https?:\/\/)?(www\.)?instagram\.com\/p\//;
        return youtubeRegex.test(url) || instagramRegex.test(url);
    }

    async function fetchVideoQualities(url) {
        // Dummy implementation returning static qualities
        const videoQualities = ["mp4", "mp3", "360p", "480p", "720p", "1080p", "2160p"];
        displayVideoQualities(videoQualities);
    }

    function displayVideoQualities(qualities) {
        const qualityOptions = document.getElementById("quality-options");
        qualityOptions.innerHTML = ""; // Clear previous options
        qualities.forEach(quality => {
            const button = document.createElement("button");
            button.innerText = quality;
            button.classList.add("button");
            button.addEventListener("click", function() {
                selectQuality(quality);
            });
            qualityOptions.appendChild(button);
        });
    }

    function selectQuality(selectedQuality) {
        // Logic to handle selected quality
        const downloadSection = document.getElementById("download-section");
        downloadSection.innerHTML = `<button id="download" onclick="download('${selectedQuality}')">Download ${selectedQuality}</button>`;
    }

    function download(selectedQuality) {
        if (selectedQuality) {
            // Logic to download the video in the selected quality
            alert(`Downloading video in ${selectedQuality} quality...`);
            // Replace the alert with actual download logic
        } else {
            alert("Please select a video quality first.");
        }
    }

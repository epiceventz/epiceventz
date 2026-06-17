from __future__ import annotations

from pathlib import Path
from urllib.request import Request, urlopen

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "images"
TMP_DIR = ROOT / ".tmp-stock-images"

ASSETS = [
    {
        "file": "hero-event.jpg",
        "url": "https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?cs=srgb&dl=pexels-freestockpro-9275222.jpg&fm=jpg",
    },
    {
        "file": "corporate-event.jpg",
        "url": "https://images.pexels.com/photos/22669860/pexels-photo-22669860.jpeg?cs=srgb&dl=pexels-cherubs-22669860.jpg&fm=jpg",
    },
    {
        "file": "led-wall.jpg",
        "url": "https://images.unsplash.com/photo-1703890641448-8b56191d7bdc?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=90&w=3000",
    },
    {
        "file": "concert-production.jpg",
        "url": "https://images.pexels.com/photos/13230484/pexels-photo-13230484.jpeg?cs=srgb&dl=pexels-fotios-photos-13230484.jpg&fm=jpg",
    },
    {
        "file": "live-streaming.jpg",
        "url": "https://images.unsplash.com/photo-1726074749981-d017a415d56e?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=90&w=3000",
    },
    {
        "file": "lighting-design.jpg",
        "url": "https://images.pexels.com/photos/13230484/pexels-photo-13230484.jpeg?cs=srgb&dl=pexels-fotios-photos-13230484.jpg&fm=jpg",
    },
    {
        "file": "audio-production.jpg",
        "url": "https://images.pexels.com/photos/16466795/pexels-photo-16466795.jpeg?cs=srgb&dl=pexels-kishanjose-16466795.jpg&fm=jpg",
    },
    {
        "file": "photography-video.jpg",
        "url": "https://images.pexels.com/photos/6226814/pexels-photo-6226814.jpeg?cs=srgb&dl=pexels-cottonbro-6226814.jpg&fm=jpg",
    },
    {
        "file": "team-production.jpg",
        "url": "https://images.pexels.com/photos/34412341/pexels-photo-34412341.jpeg?cs=srgb&dl=pexels-yeimzfx-34412341.jpg&fm=jpg",
    },
    {
        "file": "portfolio-corporate.jpg",
        "url": "https://images.pexels.com/photos/22669860/pexels-photo-22669860.jpeg?cs=srgb&dl=pexels-cherubs-22669860.jpg&fm=jpg",
    },
    {
        "file": "portfolio-cultural.jpg",
        "url": "https://images.pexels.com/photos/3370598/pexels-photo-3370598.jpeg?cs=srgb&dl=pexels-aneesh-s-1798935-3370598.jpg&fm=jpg",
    },
    {
        "file": "portfolio-concert.jpg",
        "url": "https://images.pexels.com/photos/13230484/pexels-photo-13230484.jpeg?cs=srgb&dl=pexels-fotios-photos-13230484.jpg&fm=jpg",
    },
    {
        "file": "portfolio-sports.jpg",
        "url": "https://images.pexels.com/photos/35887595/pexels-photo-35887595.jpeg?cs=srgb&dl=pexels-rakesh-m-desharla-464778103-35887595.jpg&fm=jpg",
    },
]


FOCAL_POINTS = {
    "led-wall.jpg": 0.62,
}


def cover_crop(image: Image.Image, filename: str, width: int = 1920, height: int = 1200) -> Image.Image:
    image = image.convert("RGB")
    src_w, src_h = image.size
    scale = max(width / src_w, height / src_h)
    resized = image.resize((round(src_w * scale), round(src_h * scale)), Image.Resampling.LANCZOS)
    focal_x = FOCAL_POINTS.get(filename, 0.5)
    left = round((resized.width - width) * focal_x)
    left = max(0, min(left, resized.width - width))
    top = (resized.height - height) // 2
    return resized.crop((left, top, left + width, top + height))


def download(url: str, destination: Path) -> None:
    request = Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urlopen(request, timeout=45) as response:
        destination.write_bytes(response.read())


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    TMP_DIR.mkdir(parents=True, exist_ok=True)

    for asset in ASSETS:
        source_path = TMP_DIR / asset["file"]
        download(asset["url"], source_path)
        with Image.open(source_path) as image:
            cover_crop(image, asset["file"]).save(OUT_DIR / asset["file"], "JPEG", quality=82, progressive=True, optimize=True)
        print(f"{asset['file']}: {Image.open(OUT_DIR / asset['file']).size}")


if __name__ == "__main__":
    main()

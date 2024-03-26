---
title: 'How to use Whisper in Python'
description: 'Whisper is an AI model from OpenAI that allows you to convert any audio to text with high quality and accuracy.'
pubDate: '2024-03-26T00:06:59.246Z'
heroImage: '/posts/01_whisper.jpg'
categories: ['AI', 'Python']
draft: false
lang: 'en'
# langLink: '/blog/es/como-usar-whisper'
---

Whisper is an AI model from OpenAI that allows you to convert any audio to text with high quality and accuracy. In this article I will show you how to use this AI model to get transcriptions from an audio file and how to run it with Python.

### 1. Creating your environment

At this point, I recommend that you use [Conda](https://docs.conda.io/en/latest/) to build the environment for Python and handle dependencies with poetry.

```sh
mkdir whisper_project
cd whisper_project
conda create --name whisper_project python=3.10
conda activate whisper_project
conda install -c conda-forge poetry
poetry init
```

### 2. Installing Whisper

When you have your environment ready, you can install Whisper using the following command:

```sh
poetry add openai-whisper
```

### 3. Using Whisper

Now that you have Whisper installed, you can create a `main.py` file and import Whisper as a Python package, then load the model you want to use. There are five models sizes offering speed and accuracy tradeoff.

<div class="w-full overflow-x-auto">

|  Size  | English-only model | Multilingual model | Required VRAM | Relative speed |
|:------:|:------------------:|:------------------:|:-------------:|:--------------:|
|  tiny  |     `tiny.en`      |       `tiny`       |     ~1 GB     |      ~32x      |
|  base  |     `base.en`      |       `base`       |     ~1 GB     |      ~16x      |
| small  |     `small.en`     |      `small`       |     ~2 GB     |      ~6x       |
| medium |    `medium.en`     |      `medium`      |     ~5 GB     |      ~2x       |
| large  |        N/A         |      `large`       |    ~10 GB     |       1x       |

</div>

Here is the code in `main.py` to use Whisper with Python:

```py
# main.py
import whisper
model = whisper.load_model('large')


def get_transcribe(path: str, language: str = 'en'):
    return model.transcribe(path=path, language=language, verbose=True)


if __name__ == "__main__":
    result = get_transcribe(path='./audio.wav', language='en')
    print(result.get('text', ''))
```

With the `get_transcribe` function you can get the transcription of an audio file, this function has 2 arguments the path and the language. The `path` is the path to the audio file in your environment, if you do not have an audio file to test I recommend you download this file [audio.wav](https://github.com/Azure-Samples/cognitive-services-speech-sdk/raw/master/samples/cpp/windows/console/samples/enrollment_audio_katie.wav) finally `language` is the idiom of audio file, it is possible that Whisper could recognize the audio idiom but for this works better if you define it from the start.

### 4. Running the script

Now in you terminal with the following command, you can run the script:

```sh
python main.py
```

🎉🎉🎉

### Using whisper with Jupyter notebooks

If you want to use Whisper with Jupyter notebooks, you can install the `ipykernel` package with following command:

```sh
poetry add ipykernel
```

Now I can create a Jupyter notebook, in this case the file is called `demo.ipyhnb` and use Whisper in the notebook.

### Save results in files

Whisper has a set of utilities that allow you to save the results in different formats to handle transcription results. You can use the `get_writer` function to get a writer and save the results to a file with a specified format.

```py
from whisper.utils import get_writer

writer = get_writer("tsv", './')
writer(results, 'transcribe.tsv')
```

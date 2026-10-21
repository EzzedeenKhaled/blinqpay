# Blinqpay landing page

A responsive HTML, CSS, and JavaScript implementation of the supplied Figma design. No build step or package installation is required.

Run from this directory:

```sh
python -m http.server 8000
```

Open http://localhost:8000. Use a local web server (such as VS Code Live Server) so browsers can load the image masks correctly.

The mobile navigation, section links, and email preview dialog work locally. Authentication and registration require a backend; no emails are stored or sent.

Design images are stored locally in `assests/design`. Typography uses Proxima Nova when installed, with Arial as a fallback.

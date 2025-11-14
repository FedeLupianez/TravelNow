from http.server import SimpleHTTPRequestHandler, HTTPServer


class UTF8Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        if self.path.endswith((".html", ".css", ".js")):
            self.send_header(
                "Content-Type", self.guess_type(self.path) + "; charset=utf-8"
            )
        super().end_headers()


if __name__ == "__main__":
    server = HTTPServer(("localhost", 8000), UTF8Handler)
    print("Servidor corriendo en http://localhost:8000")
    print("Visite la página en http://localhost:8000/Frontend")
    server.serve_forever()

export class Turtle {
  #plotter;
  #recovery;
  #screen;

  constructor(screen, w, h) {
    this.#screen = screen;
    this.#plotter = this.createPlotter(w, h);
    this.#recovery = [];
  }

  createPlotter(w, h) {
    const angle = 280;
    const x = w;
    const y = h;
    return { x, y, angle };
  }

  drawForward(n = 6) {
    const rad = (this.#plotter.angle * Math.PI) / 180;
    const x = Math.cos(rad);
    const y = Math.sin(rad);

    for (let i = 0; i < n; i++) {
      this.#plotter.x += x;
      this.#plotter.y += y;
      this.#screen
        .canvas[Math.round(this.#plotter.y)][Math.round(this.#plotter.x)] =
          "\x1B[44m \x1B[0m";
    }
  }

  storePlotter() {
    this.#recovery.push({ ...this.#plotter });
    // console.log(recovery);
  }

  resetPlotter() {
    const newPlotter = this.#recovery.pop();
    // console.log("new", newPlotter);
    this.#plotter.x = newPlotter.x;
    this.#plotter.y = newPlotter.y;
    this.#plotter.angle = newPlotter.angle;
  }

  turnRight(angle) {
    this.#plotter.angle += angle;
  }

  turnLeft(angle) {
    this.#plotter.angle -= angle;
  }
}

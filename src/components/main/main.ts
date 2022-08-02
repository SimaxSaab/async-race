import './mains.scss';

export const main = (): void => {
  const root = document.createElement('div');
  root.innerHTML = `
    <header class="header">
      <h1 class="title">mAkSYmNC Race</h1>
      <div>
        <button class="btn to-garage-btn">garage</button>
        <button class="btn to-winners-btn">winners</button>
      </div>
    </header>
    <main class="garage-content" id="garage-content">
      <div class="forms">
        <form class="form">
          <input class="input" id="create-name" name="name" type="text" required />
          <input
            class="color"
            id="create-color"
            name="color"
            type="color"
            value="#ffffff"
          />
          <button class="btn" type="submit">Create</button>
        </form>
        <form class="form">
          <input
            class="input"
            id="update-name"
            name="name"
            type="text"
            disabled
            required
          />
          <input
            class="color"
            id="update-color"
            name="color"
            type="color"
            value="#ffffff"
            disabled
          />
          <button class="btn" id="update-btn" type="submit" disabled >Update</button>
        </form>
      </div>
      <ul class="btns-list">
        <li>
          <button class="btn race-btn" id="race">Race</button>
        </li>
        <li>
          <button class="btn reset-btn" id="reset" disabled>Reset</button>
        </li>
        <li>
          <button class="btn generate-btn" id="generate">Generate</button>
        </li>
      </ul>
      <div id="garage" class="garage">Garage Content</div>
      <div>
        <p class="win-message hidden" id="win-message"></p>
      </div>
    </main>
    <div id="winners-content" class="winners-content">Winners Content</div>
    <div class="pagination">
      <button class="btn prev-btn" disabled id="prev">←</button>
      <button class="btn next-btn" disabled id="next">→</button>
    </div>
`;
  document.body.appendChild(root);
};
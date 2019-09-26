# smart-lighting-dashboard

This project is a dashboard that can be used to smart lighting

## Installation

The projects dependencies can be install using npm

```bash
npm i
```

## Usage

A development server can be run using `npm start`. The dashboard will then be
available at http://localhost:9000/

A production build can be generated using `npm run build`.

The project can also be run in a Docker container.
Build the image with:

```bash
docker build -t smart-lighting-dashboard .
```

Run the image with:

```bash
docker run -p 8000:8000 smart-lighting-dashboard
```

The running image can now be accessed at http://localhost:8000

## Linting

Code can be manually linted with `eslint` using the command `npm run lint`.
Files are also prettified using `husky` and `prettier` as a pre-commit hook.

## Updates Made By Phahn

- Each room now has 6 keys: id, name, active, brightness, brightOn, selected
	(key brightOn has been added, it holds brightness setting that the slider should revert back to once ON/OFF switch has been truend back on)
- Last txt tag innerHTML has been changed to 'My Place' in Nav.js'.
- Construtor has been added to Devices.js to set the state of the parent component. ID has been added to the state to keep track of which row is currently active.
- doClick function added to trigger clicks on individual rows.
- this.props.data has been added as a HTML attributes called data.
- Room tag added to display which room is currently selected.
- ArcSlider has an onClick function setPercentage, which adds current brightness setting to array when row is clicked.
- ArcSlider triggers doArc function on value change.
- ArcSlider HTML attribute value added. ArcSlider value holds current brightness level.

# illuminator
# illuminator
# lighting

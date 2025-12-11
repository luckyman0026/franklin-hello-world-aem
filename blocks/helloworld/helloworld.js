export default function decorate(block) {
  // Replace whatever is inside the block with our own content
  block.innerHTML = '<p>Hello World from Franklin (EDS)!</p>';
}

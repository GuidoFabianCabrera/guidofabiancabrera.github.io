/** Fondo decorativo: manchas de aurora en CSS puro. Detrás de todo, sin JS. */
export function Background() {
  return (
    <div aria-hidden="true" className="bg-fx">
      <div className="bg-fx-blob bg-fx-a" />
      <div className="bg-fx-blob bg-fx-b" />
      <div className="bg-fx-blob bg-fx-c" />
    </div>
  );
}

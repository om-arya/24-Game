import sectorHighlight from './card-assets/sector_highlight.png';

function SectorHighlight({ position, isVisible }) {
    return (
        <>
          {isVisible && (
            <img
              className={`sector-highlight ${position} visible`}
              src={sectorHighlight}
              alt=''
            />
          )}
        </>
      );
}

export default SectorHighlight;
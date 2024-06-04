export default function PrizeInfo({prize, showPrizeInfo, setShowPrizeInfo}) {    
    const handleClose = () => {
        setShowPrizeInfo(false)
    }

    return (
        <dialog open={showPrizeInfo}>
            <button onClick={handleClose}>Close</button>
        </dialog>
    )
}
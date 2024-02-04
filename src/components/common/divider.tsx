export default function Divider({ className }: { className?: string }) {
	return <div className={`w-100 ${className}`} style={{ height: "2px", background: "linear-gradient(to right,#BE9C7C, #FFFFFF)" }}></div>;
}

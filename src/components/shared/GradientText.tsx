export function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
      {" "}
      {children}
    </span>
  );
}

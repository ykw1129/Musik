export const ErrorFallback = ({ error }: { error: Error | null }) => (
    <div>
        {error?.message}
    </div>
)
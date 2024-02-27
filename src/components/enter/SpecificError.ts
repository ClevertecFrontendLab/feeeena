export type ApiResponseError = {
    status: number;
    data: { message: string; errors: { [k: string]: string[] } };
};

export function isApiError(error: unknown): error is ApiResponseError {
    return (
        typeof error === 'object' &&
        error !== null &&
        'status' in error &&
        typeof (error as any).status === 'number'
    );
}

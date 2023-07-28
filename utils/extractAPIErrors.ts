export default function extractAPIErrors(errors: any) {
  const extractedErrors: string[] = [];
  Object.keys(errors).forEach((key) => {
    extractedErrors.push(errors[key][0]);
  });
  return extractedErrors;
}

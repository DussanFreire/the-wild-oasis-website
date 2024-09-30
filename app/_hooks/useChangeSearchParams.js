import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useChangeSearchParams({
  searchParamName,
  defaultValue,
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeSearchParam = searchParams.get(searchParamName) ?? defaultValue;

  function handleFilter(searchParamValue) {
    const params = new URLSearchParams(searchParams);
    params.set(searchParamName, searchParamValue);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return { handleFilter, activeSearchParam };
}

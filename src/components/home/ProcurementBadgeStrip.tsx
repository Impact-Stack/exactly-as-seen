import { procurementBadges } from "@/lib/procurement";
import { Chip, Stack } from "@mui/material";

export default function ProcurementBadgeStrip() {
  return (
    <section className="py-10 px-4 bg-[#05050A] border-t border-white/5">
      <div className="container-narrow">
        <Stack direction="row" flexWrap="wrap" gap={1} justifyContent="center">
          {procurementBadges.map((badge) => (
            <Chip key={badge} label={badge} size="small" variant="outlined" sx={{ borderColor: "rgba(139,92,246,0.35)", color: "#C4B5FD", textTransform: "uppercase", letterSpacing: "0.12em" }} />
          ))}
        </Stack>
      </div>
    </section>
  );
}


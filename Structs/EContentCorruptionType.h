typedef enum EContentCorruptionType
{
    k_EContentCorruptionTypeUnknown = 0,
    k_EContentCorruptionTypeUnexpected_size = 1,
    k_EContentCorruptionTypeCrc_header_mismatch = 2,
    k_EContentCorruptionTypeSha_header_mismatch = 3,
    k_EContentCorruptionTypeDecompress_failed = 4,
    k_EContentCorruptionTypeChecksum_error = 5,
    k_EContentCorruptionTypeParsing_failed = 6,
} EContentCorruptionType;

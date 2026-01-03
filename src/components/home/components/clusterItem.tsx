import * as S from './style'

import { Flex, Text } from 'amaterasu-freyja-ui-design-system';

type ClusterItemProps = {
    item: {
        id: string;
        name: string;
        region: string;
        instances: number;
        technology: string;
        cpuUsage: number;
        memoryUsage: number;
        healthy: boolean;
        provider: string;
    }
}

export const ClusterItem = ({item}: ClusterItemProps) => {
    const icons = {
        'Druid kubernetes': '/imgs/icons/druid.svg',
        'Clickhouse EC2': '/imgs/icons/clickhouse.svg',
        'PostgreSQL': '/imgs/icons/postgres.svg',
        'ScyllaDB': '/imgs/icons/scylladb.svg',
        'Druid EC2': '/imgs/icons/druid.svg',
    }

    return <S.Item direction='column' gap='0.5rem'>
        <S.Header justifyContent='space-between' alignItems='center'>
            <Flex alignItems='center' gap='1rem'>
                <S.ItemImage src={icons[item.technology as keyof typeof icons]} alt={item.technology} title={item.technology} />
                <Text color='#FFF' size='xlarge'>{item.name}</Text>
            </Flex>
            <S.HealthyIndicator healthy={item.healthy} title={item.healthy ? "Healthy" : "Unhealthy"} />
        </S.Header>
        <Flex gap='.75rem' direction='column'>
            <Text weight='light' color='#C2C2C2' as='paragraph'>{item.technology}</Text>
            <Text weight='light' color='#C2C2C2' as='paragraph'>{item.provider} {item.region}</Text>
            <Text weight='light' color='#C2C2C2' as='paragraph'>{item.instances} instances</Text>
            <Text weight='light' color='#C2C2C2' as='paragraph'>
                <S.utilizationText weight='bold' used={item.cpuUsage}>CPU {item.cpuUsage}%</S.utilizationText>
                &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                <S.utilizationText weight='bold' used={item.memoryUsage}>RAM {item.memoryUsage}%</S.utilizationText>
            </Text>
        </Flex>
    </S.Item>
}